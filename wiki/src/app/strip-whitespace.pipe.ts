import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "stripWhitespace"
})
export class stripWhitespace implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    console.log(value.trim());
    return value.trim();
  }
}
