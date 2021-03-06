import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { Routes, RouterModule } from "@angular/router";
import { Ng2FileRequiredModule } from 'ng2-file-required';
import { WebStorageModule } from 'ngx-store';


import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { UploadService } from './uploads/shared/upload.service';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { IdentificationComponent } from './form/identification/identification.component';
import { PolisaComponent } from './form/polisa/polisa.component';
import { InvolvedComponent } from './form/involved/involved.component';
import { HitComponent } from './form/hit/hit.component';
import { CaseComponent } from './form/case/case.component';
import { PaginationComponent } from './pagination/pagination.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';
import { EndComponent } from './form/end/end.component';




const appRoutes: Routes = [

  { path: '', component: IdentificationComponent},
  { path: 'app', component: FormComponent},
  { path: 'id', component: IdentificationComponent},
  { path: 'polisa', component: PolisaComponent},
  { path: 'involved', component: InvolvedComponent},
  { path: 'hit', component: HitComponent},
  { path: 'case', component: CaseComponent},
  { path: 'end', component: EndComponent},

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
    PaginationComponent,
    UploadFormComponent,
    EndComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2FileRequiredModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    WebStorageModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features

  ],
  providers: [AngularFireDatabase, UploadService],

  bootstrap: [AppComponent]
})
export class AppModule { }
