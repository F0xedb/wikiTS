import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

interface WikiData {
  name: string;
  logo: string;
  description: string;
  company: string;
}

@Injectable({ providedIn: "root" })
export class GeneralService {
  data: WikiData;
  constructor(private httpClient: HttpClient) {}

  getWikiData(): Observable<WikiData> {
    return this.httpClient.get<WikiData>(environment.baseURL + "/api/general");
  }
}
