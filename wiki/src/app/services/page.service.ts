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
  inheritsID: number; // the inheritance of other pages
  payload: string; // valid markdown (if a table this should be in csv format)
  width: string; // used by the image component
  height: string; // also used by the image component
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
  MAX //* Used internaly as the top of the enum list (currently equals 10)
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
