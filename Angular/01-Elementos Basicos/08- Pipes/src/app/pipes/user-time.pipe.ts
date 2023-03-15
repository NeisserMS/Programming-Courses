import { Pipe, PipeTransform } from '@angular/core';
import { Converter } from '../converter.helper';

@Pipe({
    name: 'userTime'
})
export class UserTimePipe implements PipeTransform {
    transform(value: string): string {
        if (value == null || value == undefined || value == "") return "--:--";
        return Converter.TIME.to12h(value);
    }
}

// https://www.npmjs.com/package/moment Instalé la sgt libreria