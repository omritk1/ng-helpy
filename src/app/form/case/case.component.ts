import { Component, OnInit } from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css']
})
export class CaseComponent implements OnInit {
  public witnesses = [];
  public noWitnesses = false;

  @LocalStorage('ExidentDate') public exDate;
  @LocalStorage('ExidentTime') public exTime;
  @LocalStorage('ExidentCity') public exCity : string;
  @LocalStorage('ExidentStreet') public exStreet : string;


  constructor() {

    this.exDate;
    this.exTime;
    this.exCity;
    this.exStreet;


  }

  addWitness() {
    this.witnesses.push('');
  }

  remWitness(){
    this.witnesses.pop();
  }


  ngOnInit() {
  }

}
