import * as moment from 'moment';

export module Converter {

    export module TIME {
        export function to24h(time: string): string {
            return moment(time, ['h:mm A']).format("HH:mm");
        }

        export function to12h(time: string): string {
            return moment(time, ['YYYY-MM-DD HH:mm:ss']).format("MMM DD, YYYY h:mm A");
        }

        export function dateToTime(date = new Date()) {
            return TIME.to24h(`${date.getHours()}:${date.getMinutes()}`);
        }
    }
}