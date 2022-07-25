import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatmapItemComponent } from './heatmap-item.component';

describe('HeatmapIteamComponent', () => {
  let component: HeatmapItemComponent;
  let fixture: ComponentFixture<HeatmapItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeatmapItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatmapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
