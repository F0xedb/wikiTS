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
      console.log(this.section.inherits);
      this.page.getPage(this.section.inherits.toString()).subscribe(x => {
        console.log(x);
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
