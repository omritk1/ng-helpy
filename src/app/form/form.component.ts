import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {




  items: FirebaseListObservable<any>;

    constructor(db: AngularFireDatabase) {


      this.items = db.list('/cases');
    }

    updateItem(key: string, x: string) {
    this.items.update(key, { name: x });
    }
    deleteItem(key: string) {
    this.items.remove(key);
    }


}
