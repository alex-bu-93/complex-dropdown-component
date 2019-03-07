import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PaginatedList }                             from '@shared/models';
import { PagerInterface }                            from '@shared/interfaces';
import { PaginationService, TestDataService }        from '@shared/services';
import { DELIMITERS_LIST }                           from '@shared/constants';
import { includes }                                  from 'lodash';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropDownComponent {

  @Input() pageSize = 5;
  @Input() displayProps: Array<string> | string;
  @Input() placeholder = 'Начните поиск здесь с ввода латинской буквы ....';
  @Input() chosenItemsProp: string;
  @Input() chipMaxLength = 10;
  @Input() chipsEndsDots = true;
  @Input() idField = 'id';

  chosenItemsList: Array<any> = new Array<any>();

  data: PaginatedList<any> = new PaginatedList<any>();
  pager: PagerInterface;

  search: string;
  deletedChips: object;

  constructor(
    private _paginationService: PaginationService,
    private _testDataService: TestDataService
  ) {
  }

  fetchData(page, input?) {
    this.data = this._testDataService.getPaginatedData(input, page, this.pageSize);
    this.data.items.forEach(x => // Фильтр производится по уже выбранным чипсам
      x.isToShow = !includes(this.chosenItemsList.map(y => y[this.idField]), x[this.idField])
    );

    this.pager = this._paginationService.getPager(this.data.count, page, this.pageSize);
    this.chosenItemsProp = this.chosenItemsProp ? this.chosenItemsProp : Object.keys(this.data.items[0])[0];
  }


  getProperty(objectsList: Array<any>, property: string): string {
    /* Метод getProperty возвращает указанное свойство
         Возвращает первое свойство найденных элементов, если указанное свойство не найдено среди свойств найденных элементов
         Возвращает одно слово, если указанное свойство - одно слово
         Возвращает первое слово, если указанное свойство - несколько свойств */
    const elemKeys = Object.keys(objectsList[0]); // Список свойств первого элемента из массива
    const chosenItemsPropOneWord = property ? getTextFirstWord(property) : elemKeys[0];
    return includes(elemKeys, chosenItemsPropOneWord) ? chosenItemsPropOneWord : elemKeys[0];


    function getTextFirstWord(text: string): string {
      /* Метод getTextFirstWord возвращает первое слово из указанного стринга
         Проверка осуществляется по списку разделителей DELIMITERS_LIST */
      let oneWord = text;
      DELIMITERS_LIST.forEach(x => {
        if (includes(oneWord, x)) {
          oneWord = oneWord.substring(0, oneWord.indexOf(x));
        }
      });
      return oneWord;
    }
  }


  deleteChip(e) {
    this.chosenItemsList.splice(this.chosenItemsList.indexOf(e), 1);
    this.deletedChips = e;
  }

  chosenItemsOutputHandler(e) {
    this.deletedChips = null; // Подчищаем информацию о последнем удаленном чипсе
    this.chosenItemsList.push(e);
    this.data.items.forEach(x => x.isToShow = !includes(this.chosenItemsList.map(y => y[this.idField]), x[this.idField]));
  }

  deleteAllChips() {
    this.chosenItemsList = [];
  }

}
