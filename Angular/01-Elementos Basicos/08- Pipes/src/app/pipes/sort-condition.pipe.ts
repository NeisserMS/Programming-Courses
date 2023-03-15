import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
@Pipe({
	name: 'sortCondition'
})
export class SortConditionPipe implements PipeTransform {

	transform(value: Array<any>, reverse: boolean): Array<any> {
		if (!value) return [];
		if (reverse) {
			return _.sortBy(value, function (member) { return member.nombre; }).reverse();
		} else {
			return _.sortBy(value, function (member) { return member.nombre; });
		}
	}

}
