import { Component, OnInit } from "@angular/core";
import { Store } from "./common/store.service";
import "mimic";
import Mimic from "mimic";
import * as MocksFile from "./mocks.json";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit() {
    Mimic.import(JSON.stringify(MocksFile)).then(status => {
      this.store.init();
    });
  }
}
