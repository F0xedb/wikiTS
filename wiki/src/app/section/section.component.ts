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

import { Component, OnInit, Input } from "@angular/core";
import {
  PageSection,
  PageSectionType,
  PageService
} from "../services/page.service";
import { Message } from "primeng/api";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"]
})
export class SectionComponent implements OnInit {
  @Input() section: PageSection;
  maxType = PageSectionType.MAX;
  msg: Message[];
  columns: any[];
  items: any[];
  images: any[];
  inheritsName = "";
  inheritsID = "0";
  width = "100%";
  height = "100%";

  constructor(private page: PageService) {}

  ngOnInit() {
    if (this.section.inherits !== undefined) {
      this.page.getPage(this.section.inherits.toString()).subscribe(x => {
        this.inheritsName = x.name;
        this.inheritsID = this.section.inherits.toString();
      });
    }
    if (this.section.type === 4) {
      this.genTable();
    }
    if (this.section.type === 5) {
      this.msg = [this.message("info")];
    } else if (this.section.type === 6) {
      this.msg = [this.message("warn")];
    } else {
      this.msg = [this.message("error")];
    }
    this.images = [
      {
        source: this.section.payload,
        thumbnail: this.section.payload,
        title: this.section.title
      }
    ];
    if (this.section.width !== undefined) {
      this.width = this.section.width;
    }
    if (this.section.height !== undefined) {
      this.height = this.section.height;
    }
  }

  genColumn(declaration: string) {
    declaration = declaration.replace("s", "");
    let columns = declaration.split(",");
    this.columns = [];
    for (let i = 0; i < columns.length; i++) {
      this.columns.push({ header: columns[i], index: i });
    }
  }

  genDataSets(declaration: string[]) {
    this.items = [];
    declaration.forEach(element => {
      let columns = element.split(",");
      let object = {};
      for (let i = 0; i < columns.length; i++) {
        object[i] = columns[i];
      }
      this.items.push(object);
    });
  }

  genTable() {
    let fields = this.section.payload.split("\n");
    this.genColumn(fields[0]);
    // delete declaration line
    fields.splice(0, 1);
    this.genDataSets(fields);
  }

  message(type: string) {
    return {
      severity: type,
      summary: this.section.title,
      detail: this.section.payload
    };
  }
}
