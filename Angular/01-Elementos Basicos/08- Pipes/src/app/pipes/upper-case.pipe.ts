import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'upperCases'
})
export class UpperCasePipe implements PipeTransform {

	transform(value: string): string {
		if (!value) return ''
		return value.toUpperCase();
	}


}

// https://underscorejs.org/#sortBy --> Libreria (https://www.youtube.com/watch?v=z_OZuykJYbY)