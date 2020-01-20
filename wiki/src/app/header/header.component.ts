import { Component, OnInit } from "@angular/core";
import { GeneralService } from "../services/general.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  logo: string;
  name: string;
  constructor(private data: GeneralService) {
    data.getWikiData().subscribe(x => {
      this.logo = x.logo;
      this.name = x.name;
      data.data = x;
    });
  }

  ngOnInit() {}
}
