import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hit',
  templateUrl: './hit.component.html',
  styleUrls: ['./hit.component.css']
})
export class HitComponent implements OnInit {
  public selected = true;
  public hitPics = '';
  public hit =
  [
    {"backLeft":""},{"backDoorLeft":""},{"frontDoorLeft":""},{"frontLeft":""},
    {"backRight":""},{"backDoorRight":""},{"frontDoorRight":""},{"frontRight":""}

  ];

  constructor() { }

  ngOnInit() {
  }


}
