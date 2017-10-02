import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable} from 'angularfire2/database';
import { CookieStorage, LocalStorage, SessionStorage } from 'ngx-store';


@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.css']
})
export class HitComponent {
  @LocalStorage('selected') public selected = 0;
  @LocalStorage('img1') img1 = 0;
  @LocalStorage('img2') img2 = 0;
  @LocalStorage('img3') img3 = 0;
  @LocalStorage('img4') img4 = 0;
  @LocalStorage('img5') img5 = 0;
  @LocalStorage('img6') img6 = 0;
  @LocalStorage('img7') img7 = 0;
  @LocalStorage('img8') img8 = 0;

  public carImg = [{}];
  items: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.img1;
    this.img2;
    this.img3;
    this.img4;
    this.img5;
    this.img6;
    this.img7;
    this.img8;

  this.items = db.list('/cases');
  }

  updateItem(key: string,
            frontRight,
            frontDoorRight,
            backDoorRight,
            backRight,
            frontLeft,
            frontDoorLeft,
            backDoorLeft,
            backLeft
   ) {
  this.items.update(key, {  frontRight,
                            frontDoorRight,
                            backDoorRight,
                            backRight,
                            frontLeft,
                            frontDoorLeft,
                            backDoorLeft,
                            backLeft  });
  }

  addImg() {
    this.carImg.push('');











  }
  select1(){
    if(this.img1 == 0){
      this.selected ++
      this.img1 ++
    }
    else{
      this.img1 --
      this.selected --
    }
  }  select2(){
      if(this.img2 == 0){
        this.selected ++
        this.img2 ++
      }
      else{
        this.img2 --
        this.selected --
      }
    }  select3(){
        if(this.img3 == 0){
          this.selected ++
          this.img3 ++
        }
        else{
          this.img3 --
          this.selected --
        }
      }  select4(){
          if(this.img4 == 0){
            this.selected ++
            this.img4 ++
          }
          else{
            this.img4 --
            this.selected --
          }
        }  select5(){
            if(this.img5 == 0){
              this.selected ++
              this.img5 ++
            }
            else{
              this.img5 --
              this.selected --
            }
          }
          select6(){
            if(this.img6 == 0){
              this.selected ++
              this.img6 ++
            }
            else{
              this.img6 --
              this.selected --
            }
          }
          select7(){
            if(this.img7 == 0){
              this.selected ++
              this.img7 ++
            }
            else{
              this.img7 --
              this.selected --
            }
          }
          select8(){
            if(this.img8 == 0){
              this.selected ++
              this.img8 ++
            }
            else{
              this.img8 --
              this.selected --
            }
          }

}
