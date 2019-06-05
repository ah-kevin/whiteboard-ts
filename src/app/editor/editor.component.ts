import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.less']
})
export class EditorComponent implements OnInit {
  @Input() innerTheme: any;

  constructor() { }

  ngOnInit() {
  }

}
