import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { WorksComponent } from './works/works.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'works', component: WorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}