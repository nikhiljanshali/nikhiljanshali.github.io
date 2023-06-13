import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSectionComponent } from './component/right-section/right-section.component';
import { LeftSectionComponent } from './component/left-section/left-section.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';
import { CareerObjectiveComponent } from './component/career-objective/career-objective.component';
import { ProjectExperienceComponent } from './component/project-experience/project-experience.component';
import { FooterBarComponent } from './component/footer-bar/footer-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    RightSectionComponent,
    LeftSectionComponent,
    HeaderBarComponent,
    CareerObjectiveComponent,
    ProjectExperienceComponent,
    FooterBarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
