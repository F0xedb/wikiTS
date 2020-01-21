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

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

export interface Page {
  name: string;
  description: string;
  sections: PageSection[];
}

export interface PageSection {
  type: PageSectionType;
  title: string;
  inherits: number; // the inheritance of other pages
  payload: string; // valid markdown (if a table this should be in csv format)
  width: string; // used by the image component
  height: string; // also used by the image component
  css: string; // css class the note the language
}

export enum PageSectionType {
  TEXT, //* This section is just plain text
  TITLE, //* This section describes a title
  SUBTITLE, //* This section describes a subtitle
  TABLE, //* This section describes a table
  INFO, //* this section is a info note
  WARNING, //* this section is a warning note
  ERROR, //* this section is a error note
  IMAGE, //* this section describes an image (base64, url and more)
  LINK, //* a reference link
  CODE, //* the Code highlighter
  MAX //* Used internally as the top of the enum list (currently equals 10)
}

@Injectable({
  providedIn: "root"
})
export class PageService {
  constructor(private httpClient: HttpClient) {}
  getPage(id: string) {
    console.log(id);
    return this.httpClient.get<Page>(environment.baseURL + "/api/page/" + id);
  }
}
