import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { FrontComponent } from './front/front.component';
import { IdentificationComponent } from './form/identification/identification.component';
import { PolisaComponent } from './form/polisa/polisa.component';
import { InvolvedComponent } from './form/involved/involved.component';
import { HitComponent } from './form/hit/hit.component';
import { CaseComponent } from './form/case/case.component';

// import { FormDataService }    from './data/formData.service';
// import { WorkflowService }    from './workflow/workflow.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    FrontComponent,
    IdentificationComponent,
    PolisaComponent,
    InvolvedComponent,
    HitComponent,
    CaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
