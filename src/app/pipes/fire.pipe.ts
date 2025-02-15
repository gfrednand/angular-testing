import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'fire',
})

export class FirePipe implements PipeTransform {
    transform(value: string): string {
        return value + '      ---->🔥';
    }
}