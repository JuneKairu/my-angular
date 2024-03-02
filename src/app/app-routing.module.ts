import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Forms } from './forms/forms.component';

const routes: Routes = [
  { path: 'forms', component: Forms }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}