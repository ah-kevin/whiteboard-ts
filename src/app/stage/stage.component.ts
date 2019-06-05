import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.less']
})
export class StageComponent implements OnInit {
  theme = {
    background: {
      image: '../../assets/background/bg2.jpg'
    },
    ink: {},
    shape: {},
    svg: {},
    image: {},
    eraser: {}
  };

  constructor() {
  }

  ngOnInit() {
  }

}
