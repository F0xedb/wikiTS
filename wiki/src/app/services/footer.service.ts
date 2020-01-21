import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

export interface Footer {
  sections: FooterSection[];
}

export interface FooterSection {
  name: string;
  description: string;
  links: Link[];
}

export interface Link {
  logo: string;
  url: string;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class FooterService {
  data: Footer;
  constructor(private httpClient: HttpClient) {}

  getFooterData(): Observable<Footer> {
    return this.httpClient.get<Footer>(environment.baseURL + "/api/footer");
  }
}
