import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "urlFormat"
})
export class UrlFormatPipe implements PipeTransform {
  //* URI is in the following format
  //* name;URL or URL
  transform(value: any, type: string): any {
    //* return the part before ;
    if (type === "name") {
      return value.split(";")[0];
      //* return the part after ;
    } else if (type === "url") {
      let arr = value.split(";");
      //* in case the input doesn't contain a ;
      if (arr.length < 2) {
        return arr[0].replace("s", "");
      }
      return arr[1].replace("s", "");
    }
    //* return the full value when no operator is supplied
    return value.replace("s", "");
  }
}
