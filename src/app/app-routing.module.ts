import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EducationComponent } from './pages/education/education.component';
import { ExperienceComponent } from './pages/experience/experience.component';

const routes: Routes = [
  {
    path: 'experience',
    component: ExperienceComponent,
    title: 'Experience',
  },
  {
    path: 'education',
    component: EducationComponent,
    title: 'Education',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'About me',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
