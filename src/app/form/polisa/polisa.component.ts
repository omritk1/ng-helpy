import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polisa',
  templateUrl: './polisa.component.html',
  styleUrls: ['./polisa.component.css']
})
export class PolisaComponent implements OnInit {
  public polisa = {

  };
public showUpload = true;
  constructor() { }
show(){
  this.showUpload = false;
}
hide(){
  this.showUpload = true;
}
  ngOnInit() {
  }

}
