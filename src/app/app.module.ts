import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeatmapItemComponent } from './components/heatmap-item/heatmap-item.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    HeatmapItemComponent,
    HeatmapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
