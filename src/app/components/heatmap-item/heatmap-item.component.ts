import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heatmap-item',
  templateUrl: './heatmap-item.component.html',
  styleUrls: ['./heatmap-item.component.scss']
})
export class HeatmapItemComponent {

  @Input()
  value: number;

  @Input()
  bgColor: string;

  @Input()
  fontColor: string;

}
