import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.css'],
})
export class CaseComponent {
  public witnesses = [];
  public noWitnesses = false;
  public click = 0;
  public agreed = false;


  @LocalStorage('ExidentDate') public exDate;
  @LocalStorage('ExidentTime') public exTime;
  @LocalStorage('ExidentCity') public exCity : string;
  @LocalStorage('ExidentStreet') public exStreet : string;
  @LocalStorage('ExidentDetails') public exDit : string;


  items: FirebaseListObservable<any>;


constructor(db: AngularFireDatabase) {

this.items = db.list('/cases');

    this.exDate;
    this.exTime;
    this.exCity;
    this.exStreet;
    this.exDit;
    this.witnesses;
  }

  updateItem(key: string, exDate , exTime, exCity, exStreet, exDit) {
  this.items.update(key, { Date: exDate, Time:exTime, City:exCity, Street:exStreet ,Details:exDit});
  }

  addWitness() {
    this.witnesses.push('');
    this.click++;
  }

  remWitness(){
    this.witnesses.pop();
    this.click--;
  }

  agreedToTerms(){
    if(this.agreed == false){
      this.agreed = true
    }
    else{
      this.agreed = false
    }
  }






}
