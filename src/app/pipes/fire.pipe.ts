import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'fire',
    standalone: true
})

export class FirePipe implements PipeTransform {
    transform(value: string): string {
        return value + '      ---->🔥';
    }
}