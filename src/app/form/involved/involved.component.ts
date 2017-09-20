import { Component, OnInit } from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';


@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html',
  styleUrls: ['./involved.component.css']
})
export class InvolvedComponent {
  @LocalStorage('This is the involved array') public involved: Array<object> = [];
  @LocalStorage('this is an involve') public involve:object;
  @LocalStorage('insurancePolicy')  public insurancePolicy;
  @LocalStorage('drivingLicence')  public drivingLicence;
  public noEnv = false;
  public click = 0;


  constructor() {
          this.involved = []
          this.involve = {}
          this.drivingLicence
          this.insurancePolicy
   }

  addInvolved() {
    this.involved.push({});
    this.click++;

  }

  remInvolved(){
    this.involved.pop();
    this.click--;
  }

  ngOnInit() {
  }

}
