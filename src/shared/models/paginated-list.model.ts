export class PaginatedList<T> {

  items: T[] = new Array<T>(); // Лист элементов блока
  offset?: number; // Стартовая позиция, для получаемой страницы
  top?: number; // Количество элементов на 1 странице
  count: number; // Общее количество элементов на всех страницах

}
