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
