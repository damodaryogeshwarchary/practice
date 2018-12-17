import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrequencyLineChartComponent } from '../frequency-line-chart/frequency-line-chart.component';
import { D3Component } from '../d3/d3.component';
import { SelectableLineChartComponent } from '../selectable-line-chart/selectable-line-chart.component';
const routes: Routes = [
  { path: '', redirectTo: 'selector', pathMatch: 'full' },
  { path: 'd3', component: D3Component },
  { path: 'frequency', component: FrequencyLineChartComponent },
  { path: 'selector', component: SelectableLineChartComponent }
];
@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class D3RoutingModule {}
