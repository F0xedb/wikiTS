import { Component, AfterViewInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  previousEvent = false;
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
  }
}
