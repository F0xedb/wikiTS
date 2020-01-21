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
