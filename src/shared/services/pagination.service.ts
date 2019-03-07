import { Injectable }     from '@angular/core';
import { PagerInterface } from '../interfaces/pager.interface';
import { range }          from 'lodash';

@Injectable()
export class PaginationService {

  /* Метод getPager с бекенда на вход получает:
    - Общее количество элементов
    - Текущую позицию
    - Размер страницы
    Метод getPager используется в кол-беке запроса и возвращает pager
   */

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10): PagerInterface {

    /*  Общее количество страниц
        totalPages - отношение общего количества элементов к размеру страницы,
        округление производится до первого целого числа вверх
    */
    const totalPages = Math.ceil(totalItems / pageSize);

    /*  Стратовая и конечная страницы
        Указываются в навигаторе по страницам
    */
    let startPage: number, endPage: number;

    /* Количество страниц с указанием их номера */
    const pagesNavigationBarLength = 5;

    /*  Если общее количество страниц меньше или равно pagesWithNumber,
        показываем все. В противном случае расчитываем начальную и конечную страницы
    */
    if (totalPages <= pagesNavigationBarLength) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 5) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    /* Рассчитываем начальный и конечный индек страниц */
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

    /* Создаем массив страниц для иттиерации в компонентах */
    const pages = range(startPage, endPage + 1);

    pageSize = (totalItems < pageSize ? totalItems : pageSize);

    // return pager
    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

}
