import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { MockDataService } from './services/mock-data.service';

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    title = "heatmap";

    data: Observable<number[][]>

    constructor(public mockdata: MockDataService) {}

}
