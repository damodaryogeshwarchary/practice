import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextBoxComponent } from './text-box/text-box.component';
import { D3Component } from 'src/app/d3/d3.component';

const routes: Routes = [
  { path: '', redirectTo: 'textbox', pathMatch: 'full' },
  { path: 'textbox', component: TextBoxComponent },
  { path: 'd3charts', component: D3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
