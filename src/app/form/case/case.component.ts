import { Component, ElementRef,OnInit ,Directive} from '@angular/core';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent implements OnInit {
  public witnesses = [];
  public noWitnesses = false;
  public click = 0;


  @LocalStorage('ExidentDate') public exDate;
  @LocalStorage('ExidentTime') public exTime;
  @LocalStorage('ExidentCity') public exCity : string;
  @LocalStorage('ExidentStreet') public exStreet : string;
  @LocalStorage('ExidentDetails') public exDit : string;


  constructor() {

    this.exDate;
    this.exTime;
    this.exCity;
    this.exStreet;
    this.exDit;


  }

  addWitness() {
    this.witnesses.push('');
    this.click++;
  }

  remWitness(){
    this.witnesses.pop();
    this.click--;
  }


  ngOnInit() {
  }




}
