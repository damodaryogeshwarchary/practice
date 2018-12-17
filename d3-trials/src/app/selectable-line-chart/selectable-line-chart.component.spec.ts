import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectableLineChartComponent } from './selectable-line-chart.component';

describe('SelectableLineChartComponent', () => {
  let component: SelectableLineChartComponent;
  let fixture: ComponentFixture<SelectableLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectableLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectableLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
