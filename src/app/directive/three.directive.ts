import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';
import { WebGLRenderer } from 'three';

@Directive({
  selector: '[ngxThree]'
})
export class ThreeDirective implements AfterViewInit {
  @Output() configure = new EventEmitter<{ container: HTMLElement, renderer: WebGLRenderer, width: number, height: number }>();

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const hostElement: HTMLElement = this.elementRef.nativeElement;
    const box = hostElement.getBoundingClientRect();
    const renderer = new WebGLRenderer();
    renderer.setSize(box.width, box.height);
    renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
    hostElement.appendChild(renderer.domElement);
    this.configure.emit({
      container: hostElement,
      renderer,
      width: box.width,
      height: box.height
    });
  }
}
