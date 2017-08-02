import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public user= {
    name:'',
    password: ""
  };

// postToServer(){
//
//   console.log(this.user);
// }

constructor(private x:Http){
  this.x.post('nativ', this.user).subscribe()
}

}
