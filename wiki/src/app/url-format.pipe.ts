/*
 *  MIT License
 *  
 *  Copyright (c) 2020 Meyers Tom
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *  
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
*/

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
