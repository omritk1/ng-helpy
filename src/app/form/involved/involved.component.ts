import { Component, OnInit } from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';


@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html',
  styleUrls: ['./involved.component.css']
})
export class InvolvedComponent {
  public involved = [{}];

  public noEnv = false;
  public click = 0;

public noInvolved;

  constructor() {
          this.involved = [{}]
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
