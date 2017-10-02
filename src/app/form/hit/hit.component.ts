import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.css']
})
export class HitComponent implements OnInit {
  public selected = 0;


  img1 = 0;
  img2 = 0;
  img3 = 0;
  img4 = 0;
  img5 = 0;
  img6 = 0;
  img7 = 0;
  img8 = 0;



  public carImg = [];

  constructor() { }

  ngOnInit() {
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
