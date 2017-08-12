import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { IdentificationComponent } from './form/identification/identification.component';
import { PolisaComponent } from './form/polisa/polisa.component';
import { InvolvedComponent } from './form/involved/involved.component';
import { HitComponent } from './form/hit/hit.component';
import { CaseComponent } from './form/case/case.component';
import { PaginationComponent } from './pagination/pagination.component';

const appRoutes: Routes = [

  { path: '', component: IdentificationComponent},
  { path: 'app', component: FormComponent},
  { path: 'id', component: IdentificationComponent},
  { path: 'polisa', component: PolisaComponent},
  { path: 'involved', component: InvolvedComponent},
  { path: 'hit', component: HitComponent},
  { path: 'case', component: CaseComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    IdentificationComponent,
    PolisaComponent,
    InvolvedComponent,
    HitComponent,
    CaseComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
