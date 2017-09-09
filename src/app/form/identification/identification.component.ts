import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent {




  @LocalStorage('this is my date') public dataOfBirth : number;
  @LocalStorage('This Is A Test') public userName: number;
  @LocalStorage('This Is My ID') public identification: number;

  item: FirebaseObjectObservable<any>;
  Idn: FirebaseObjectObservable<any>;
  Date: FirebaseObjectObservable<any>;
  items: FirebaseListObservable<any>;

    constructor(db: AngularFireDatabase) {
      this.dataOfBirth;
      this.userName;
      this.identification;



      this.items = db.list('/messages');
      this.item = db.object('/item');
      this.Idn = db.object('/Idn');
      this.Date = db.object('/Date');

    }
    addItem(newName: string) {
      this.items.push({ text: newName });
    }

    addIdn(identification: number){
      this.items.push({Idn: identification})
    }

    addDate(dataOfBirth: number){
      this.items.push({Date: dataOfBirth})
    }

    updateItem(key: string, newText: string) {
      this.items.update(key, { text: newText });
    }
    deleteItem(key: string) {
      this.items.remove(key);
    }
    deleteEverything() {
      this.items.remove();
    }



}
