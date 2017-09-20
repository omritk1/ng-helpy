import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  public witnesses = [];
  public noWitnesses = false;


  constructor() { }

  addWitness() {
    this.witnesses.push('');
  }

  remWitness(){
    this.witnesses.pop();
  }


  ngOnInit() {
  }

}
