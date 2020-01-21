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
import { Router } from "@angular/router";
import { GeneralService } from "../services/general.service";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.scss"]
})
export class LandingPageComponent implements OnInit {
  logo = "https://tos.odex.be/images/logo.svg";
  name = "WikiTS";
  description = "The best cheatsheet ever";
  constructor(private router: Router, private general: GeneralService) {
    let interval = setInterval(() => {
      if (this.general.data !== undefined) {
        console.log(this.general.data);
        this.logo = this.general.data.logo;
        this.name = this.general.data.name;
        this.description = this.general.data.description;
        clearInterval(interval);
      }
    }, 200);
  }

  ngOnInit() {}

  home() {
    this.router.navigate(["page", "0"]);
  }
}
