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

import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { GeneralService } from "../services/general.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  logo: string;
  name: string;
  @Output() navbar: EventEmitter<boolean> = new EventEmitter();
  bIsNavOpen = false;
  constructor(private data: GeneralService) {
    data.getWikiData().subscribe(x => {
      this.logo = x.logo;
      this.name = x.name;
      data.data = x;
    });
  }

  ngOnInit() {}

  toggleNav(event) {
    if (event.target.classList.contains("container")) {
      event.target.classList.toggle("change");
    } else {
      event.target.parentNode.classList.toggle("change");
    }
    this.bIsNavOpen = !this.bIsNavOpen;
    this.navbar.emit(this.bIsNavOpen);
  }
}
