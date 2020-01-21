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

import { Component, AfterViewInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  previousEvent = false;
  navEmitter: Subject<boolean> = new Subject<boolean>();
  navElementEmitter: Subject<boolean> = new Subject<boolean>();

  constructor() {}
  ngAfterViewInit(): void {
    window.onresize = () => {
      if (window.innerWidth > 798) {
        this.bShowNavBar = true;
      } else {
        this.bShowNavBar = this.previousEvent;
      }
    };
  }
  title = "wiki";
  bShowNavBar = window.innerWidth > 798;
  navBarStatus(event) {
    this.bShowNavBar = event;
    this.previousEvent = event;
    this.navElementEmitter.next(event);
  }
  navBarUpdate(event) {
    if (window.innerWidth < 798) {
      this.navEmitter.next(event);
      this.bShowNavBar = event;
    }
  }

  clicked() {
    // only hid the navbar when clicked
    if (window.innerWidth < 798) {
      // check if navbar is shown
      if (this.bShowNavBar) {
        // hide the navbar and update hamburger menu
        this.navEmitter.next(false);
        this.navElementEmitter.next(false);
      }
    }
  }
}
