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

import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  NavigationService,
  Navigation,
  NavigationSection
} from "../services/navigation.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  nav: Navigation;
  selection: NavigationSection;
  selectionID = environment.NAV_ID;
  // reference to the global window object required by the HTML
  windowObj: any;
  showable = true;
  @Output() navbar: EventEmitter<boolean> = new EventEmitter();
  @Input("update") navbarSetter: Observable<boolean>;
  @Input("clicker") gridClicked: Observable<boolean>;
  constructor(private NavService: NavigationService, private router: Router) {
    this.NavService.getNavigation().subscribe(x => {
      this.nav = x;
      this.selection = x.sections[this.selectionID];
      console.log(this.selection);
      this.NavService.navigation = x;
    });
  }

  toggleMenuSection(id) {
    // if this section is already selected that deselect it
    if (this.nav.sections[id] == this.selection) {
      this.toggleMenuSection(-1);
      return;
    }
    this.selection = this.nav.sections[id];
    this.selectionID = id;

    // add environment fade animation
    if (environment.fadeNavigationMenuItems) {
      let elements = [...this.selection.elements];
      this.selection.elements = [];
      const interval = setInterval(() => {
        if (elements.length === 0) {
          // if all elements have been added clear the interval
          clearInterval(interval);
        } else {
          // add one element at a time
          this.selection.elements.push(elements.splice(0, 1)[0]);
        }
      }, environment.fadeNavigationTimeout);
    }
  }

  ngOnInit() {
    this.navbarSetter.subscribe(x => {
      this.showable = x;
    });
    // reference to the global window object required by the HTML
    this.windowObj = window;
  }
  open(i, j) {
    console.log(i, j);
    const element = this.nav.sections[i].elements[j];
    this.page(element.pageID);
  }
  page(id: number) {
    this.router.navigate(["page", id]);
    this.navbar.emit(false);
    if (window.innerWidth < 798) {
      this.showable = false;
    } else {
      this.showable = true;
    }
  }

  show() {
    this.showable = true;
  }

  clicked() {
    this.showable = false;
    this.navbar.emit(false);
  }
}
