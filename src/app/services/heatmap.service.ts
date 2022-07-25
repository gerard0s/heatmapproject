import { Injectable } from "@angular/core";
import { HSLColorRange } from "../model/range.model";


@Injectable({
    providedIn: "root",
})
export class HeatmapService {

    hslColorRange: HSLColorRange;

    constructor() {}

    mapData(data: number[][], colLabels: string[], rowLabels: string[]): any[][] {
        this.hslColorRange = this.setupColorRange(data);

        const heatmapData: any[][] = [];

        data.forEach((row, i) => {
            heatmapData[i] = [];
            heatmapData[i].push({
                value: rowLabels[i],
                row: true
            });
            row.forEach(col => {
                heatmapData[i].push({
                    value: col,
                    bgColor: this.hslColorRange.getBackgroundColor(col),
                    fontColor: this.hslColorRange.getFontColor(col),
                    sourceData: true
                });
            })
        });

        heatmapData[heatmapData.length] = [];

        colLabels.forEach(col => heatmapData[heatmapData.length-1].push({
            value: col,
            col: true
        }))
        return heatmapData;
    }

    private setupColorRange(data: number[][]) {
        let mins = [];
        let maxs = [];

        data.forEach(row => {
            mins.push(Math.min(...row));
            maxs.push(Math.max(...row));
        });

        this.hslColorRange = new HSLColorRange(Math.min(...mins), Math.max(...maxs));

        return new HSLColorRange(Math.min(...mins), Math.max(...maxs));
    }

}
