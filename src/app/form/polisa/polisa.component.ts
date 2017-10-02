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
  public polisaOwner;


  items: FirebaseListObservable<any>;


constructor(db: AngularFireDatabase) {
  this.myCarNumber;

this.items = db.list('/cases');
}

updateItem(key: string, carNumber: number, yes, no) {
this.items.update(key, { carNumber: carNumber, polisaOwnership:yes || no });
}
deleteItem(key: string) {
this.items.remove(key);
}



show(){
  this.showUpload = false;
}

hide(){
  this.showUpload = true;
}

}
