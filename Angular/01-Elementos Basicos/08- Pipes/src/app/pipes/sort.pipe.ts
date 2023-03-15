import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  // transform(value: Array<any>): Array<any> {
  //   if (!value) return [];
  //   return _.sortBy(value, function (member) { return member.nombre; });
  // }

  // Al revés

  transform(value: Array<any>): Array<any> {
    if (!value) return [];
    return _.sortBy(value, function (member) { return member.nombre; }).reverse();
  }


}
