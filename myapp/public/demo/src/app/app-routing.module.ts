import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextBoxComponent } from './text-box/text-box.component';

const routes: Routes = [
  { path: '', redirectTo: 'textbox', pathMatch: 'full' },
  { path: 'textbox', component: TextBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
