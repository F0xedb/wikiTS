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

import { Component, OnInit } from "@angular/core";
import {
  NavigationService,
  Navigation,
  NavigationSection
} from "../services/navigation.service";
import { MenuItem } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  nav: Navigation;
  items: MenuItem[];
  constructor(private NavService: NavigationService, private router: Router) {
    this.NavService.getNavigation().subscribe(x => {
      this.nav = x;
      this.NavService.navigation = x;
      this.populate();
    });
  }

  ngOnInit() {}

  page(id: number) {
    console.log("Opening page: " + id);
    this.router.navigate(["page", id]);
  }

  getSectionItems(section: NavigationSection): MenuItem[] {
    let items = [];
    section.elements.forEach(element => {
      items.push({
        label: element.name,
        command: () => this.page(element.pageID)
      });
    });
    return items;
  }

  //* populate the navigation screen
  populate() {
    this.items = [];
    this.nav.sections.forEach(section => {
      this.items.push({
        label: section.name,
        items: this.getSectionItems(section)
      });
    });
  }
}
