import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { PageService, Page } from "../services/page.service";

@Component({
  selector: "app-page",
  templateUrl: "./page.component.html",
  styleUrls: ["./page.component.scss"]
})
export class PageComponent implements OnInit {
  page = {
    name: "",
    description: "",
    sections: []
  };
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PageService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => this.service.getPage(params.get("id")))
      )
      .subscribe(x => {
        this.page = x;
      });
  }
}
