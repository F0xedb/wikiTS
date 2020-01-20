import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

export interface Navigation {
  name: string;
  sections: NavigationSection[];
}

export interface NavigationSection {
  name: string;
  elements: NavigationElement[];
}

export interface NavigationElement {
  name: string;
  pageID: number;
}

@Injectable({
  providedIn: "root"
})
export class NavigationService {
  navigation: Navigation;
  constructor(private httpClient: HttpClient) {}

  getNavigation() {
    return this.httpClient.get<Navigation>(environment.baseURL + "/api/nav");
  }
}
