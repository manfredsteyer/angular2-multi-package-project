import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {

        let fmt: string = args[0];
        let short: string;
        let long: string;

        switch(value) {
            case "Hamburg":
                short = "HAM";
                long = "Hamburg Airport Helmut Schmidt";
            break;
            case "Graz":
                short = "GRZ";
                long = "Flughafen Graz-Thalerhof";
            break;
            default:
                short = long = "ROM";
        }

        if (fmt == 'long') return long;
        return short;
        
    }

}