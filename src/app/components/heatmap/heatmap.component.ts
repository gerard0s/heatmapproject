import { Component, Input, OnInit } from "@angular/core";
import { HeatmapService } from "src/app/services/heatmap.service";

@Component({
    selector: "app-heatmap",
    templateUrl: "./heatmap.component.html",
    styleUrls: ["./heatmap.component.scss"],
})
export class HeatmapComponent implements OnInit {

    @Input()
    title: string;

    @Input()
    data: number[][];

    @Input()
    colLabels: string[];

    @Input()
    rowLabels: string[];

    source: any[][];

    constructor(private heatmapService: HeatmapService) {}

    ngOnInit() {
        this.source = this.heatmapService.mapData(this.data, this.colLabels, this.rowLabels);
    }
}
