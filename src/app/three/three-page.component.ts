import { Component, OnInit } from '@angular/core';
import { WebGLRenderer } from 'three';

@Component({
  selector: 'three-page',
  templateUrl: './three-page.component.html',
  styleUrls: ['./three-page.component.less']
})
export class ThreePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  configureThree(data: { container: HTMLElement; renderer: WebGLRenderer; width: number; height: number }) {

  }
}
