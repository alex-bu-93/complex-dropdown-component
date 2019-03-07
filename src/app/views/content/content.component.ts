import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DELIMITERS_LIST }                                                 from '@shared/constants';
import { isEmpty, includes }                                               from 'lodash';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentComponent {

  @Input() items: Array<any> = new Array<any>();
  @Input() chips: Array<object> = new Array<object>();
  @Input() displayProps: any;
  @Input() idField: string;
  @Input() deletedChips: object = {}; // Удаленный пользователем чипс
  @Output() chosenItemsOutput: EventEmitter<Array<object>> = new EventEmitter<Array<object>>();

  warningMessage: string;

  getDisplayPropsList(): Array<string> {
    /* Метод getDisplayPropsList преобразаует принятое значение displayProps
       в массив стрингов с учетом списка свойств пришедших элементов */

    const dataPropList = Object.keys(this.items[0]); // Список свойств пришедших элементов
    const displayProps: string | Array<string> = this.displayProps; // Список свойств, указаенных в параметре
    let displayPropsList: Array<string> = new Array<string>(); // Массив отображаемых свойств


    /* Список свойств не указан в параметрах
       Возвращаем все свойства пришедших объектов, кроме искусствено добавленного isToShow */
    if (!displayProps) {
      dataPropList.splice(dataPropList.indexOf('isToShow', 1));
      return dataPropList;
    }

    // Список свойств перечислен строкой:
    if (typeof displayProps === 'string') {
      const delimiter = getDelimiter(displayProps);
      displayPropsList = delimiter ? displayProps.split(delimiter) : [displayProps];

      // Список свойств перечислен массивом:
    } else if (Array.isArray(displayProps)) {
      displayPropsList = displayProps;

      // Другие случаи:
    } else {
      this.warningMessage = 'Некорректно указаны свойства данных';
      return;
    }

    // Список свойств отфильтрован по списку свойств пришедших элементов:
    if (this.items) {
      displayPropsList = getFilteredDisplayPropsList(displayPropsList);
    }

    // Указанные свойства отсутствуют в найденных данных:
    if (isEmpty(displayPropsList)) {
      displayPropsList = null;
      this.warningMessage = 'Указанные свойства не найдены в объектах';
    }

    return displayPropsList;


    /* Метод getFilteredDisplayPropsList отфильтровывает массив по списку свойст пришедших объектов
       В результате возвращает массив найденных свойств, либо пустой массив */
    function getFilteredDisplayPropsList(arr): Array<string> {
      return arr.filter(x => includes(dataPropList, x));
    }

    /* Метод getDelimiter ищет в переданном стринге последний разделитель из списка разделителей
       В случае успеха возвращает найденный разделитель
       В случае неуспеха возвращает null */
    function getDelimiter(stringWithDelimiter: string): string | null {
      let delimiter = null;
      DELIMITERS_LIST.forEach(x => {
        if (includes(stringWithDelimiter, x)) {
          delimiter = x;
        }
      });
      return delimiter;
    }
  }


  getDropDownItems(fullItemsList: Array<any>): Array<any> {
    /* Метод getDropDownItems возвращает отфильтрованную страницу элементов
       Фильтрация производится:
        - по факту удаления всех выбранных чипсов
        - по только что удаленному чипсу,
        - по списку выбранных чипсов */
    if (isEmpty(this.chips)) {
      fullItemsList.forEach(x => x.isToShow = true);
    }
    if (this.deletedChips) {
      if (!isEmpty(fullItemsList.filter(x => x[this.idField] === this.deletedChips[this.idField]))) {
        fullItemsList.filter(x => x[this.idField] === this.deletedChips[this.idField])[0].isToShow = true;
      }
    }
    return fullItemsList.filter(x => x.isToShow);
  }

  onRowClick(e) {
    this.chosenItemsOutput.emit(e);
  }

}
