import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalRepoComponent } from './local-repo/local-repo.component';
import { Router } from '@angular/router';
import { SheduleComponent } from './shedule/shedule.component';
import { TaskComponent } from './task/task.component';
import { IssueComponent } from './issue/issue.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LocalRepoComponent,
    SheduleComponent,
    TaskComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    this.router.navigate(['/home'])
  }
}
