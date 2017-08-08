import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-involved',
  templateUrl: './involved.component.html',
  styleUrls: ['./involved.component.css']
})
export class InvolvedComponent implements OnInit {
  public involveds = [];
  public noEnv = false;

  constructor() { }

  addInvolved() {
    this.involveds.push('');
  }

  ngOnInit() {
  }

}
