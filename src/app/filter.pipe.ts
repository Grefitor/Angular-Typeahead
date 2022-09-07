import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<any>, filterCriteria: string): any {
    console.log(filterCriteria);
    if (filterCriteria === '') {
      return [];
    }
    return value.filter((ele) => ele.username.toLowerCase().match(filterCriteria.toLowerCase(), 'i'));
  }
}
