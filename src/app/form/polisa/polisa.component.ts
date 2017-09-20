import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';


@Component({
  selector: 'app-polisa',
  templateUrl: './polisa.component.html',
  styleUrls: ['./polisa.component.css']
})
export class PolisaComponent {

  @LocalStorage('Car Number') public myCarNumber : number;

  public showUpload = true;
  public polisa = {};

constructor(db: AngularFireDatabase) {
  this.myCarNumber;
}

show(){
  this.showUpload = false;
}

hide(){
  this.showUpload = true;
}

}
