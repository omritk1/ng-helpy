import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html',
  styleUrls: ['./involved.component.css']
})
export class InvolvedComponent implements OnInit {
  public involved = [];
  public noEnv = false;

  constructor() { }

  addInvolved() {
    this.involved.push('');
  }

  remInvolved(){
    this.involved.pop();
  }

  ngOnInit() {
  }

}
