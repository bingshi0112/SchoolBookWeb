/**
 * Created by Gaurav on 01-12-2016.
 */
import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: 'summary'})
export class SummaryPipe implements PipeTransform {

    transform(value:string,args: string[]) {
        if(value) {
        let limit = (args && args[0])? parseInt(args[0]):15;
        if(value.length > 8) {
            return value.substring(0,limit) + "...";
        }
        return value;
        }
        return;
    }
}