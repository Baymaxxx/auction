import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword: string): any {
    console.log(filterField, keyword);
    if (filterField && keyword) {
      return list.filter(item => {
        const filterValue = item[ filterField ];
        console.log(filterValue);
        return filterValue.indexOf(keyword) > -1;
      });
    } else {
      return list;
    }
  }
}
