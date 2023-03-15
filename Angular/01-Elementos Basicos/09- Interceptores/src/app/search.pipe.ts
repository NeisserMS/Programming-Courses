import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(value: any, arg?: any): any { // arg en lugar de args porque solo tendremos un argumento.
		const result = [];
		for(const digimones of value){
			if(digimones.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
				result.push(digimones);
			}
		}
		return result;
	}

}
