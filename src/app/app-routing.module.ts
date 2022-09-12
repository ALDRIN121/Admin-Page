import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueComponent } from './issue/issue.component';
import { LocalRepoComponent } from './local-repo/local-repo.component';
import { SheduleComponent } from './shedule/shedule.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home'
  },
  {
    component:LocalRepoComponent,
    path:'local'
  },
  {
    component:SheduleComponent,
    path:'shedule'
  },
  {
    component:TaskComponent,
    path:'task'
  },
  {
    component:IssueComponent,
    path:'issue'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
