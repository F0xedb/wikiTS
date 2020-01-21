import { Component, OnInit } from "@angular/core";
import { FooterService, Footer } from "../services/footer.service";
import { GeneralService } from "../services/general.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  footer: Footer;
  company = "";
  constructor(
    private footerService: FooterService,
    private general: GeneralService
  ) {
    this.footerService.getFooterData().subscribe(x => {
      this.footer = x;
      this.footerService.data = x;
    });
    let interval = setInterval(() => {
      if (this.general.data !== undefined) {
        console.log(this.general.data);
        this.company = this.general.data.company;
        clearInterval(interval);
      }
    }, 200);
  }

  ngOnInit() {}
}
