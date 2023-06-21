import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// For angular version 14

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightSectionComponent } from './component/right-section/right-section.component';
import { LeftSectionComponent } from './component/left-section/left-section.component';
import { HeaderBarComponent } from './component/header-bar/header-bar.component';
import { CareerObjectiveComponent } from './component/career-objective/career-objective.component';
import { ProjectExperienceComponent } from './component/project-experience/project-experience.component';
import { FooterBarComponent } from './component/footer-bar/footer-bar.component';
import { CertificationComponent } from './component/certification/certification.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { AddressDetailsComponent } from './component/address-details/address-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RightSectionComponent,
    LeftSectionComponent,
    HeaderBarComponent,
    CareerObjectiveComponent,
    ProjectExperienceComponent,
    FooterBarComponent,
    CertificationComponent,
    ContactUsComponent,
    AddressDetailsComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
