import { AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { WebGLRenderer } from 'three';

@Directive({
  selector: '[ngxThree]'
})
export class ThreeDirective implements AfterViewInit, OnDestroy {
  @Output() configure = new EventEmitter<{ container: HTMLElement, renderer: WebGLRenderer, width: number, height: number }>();
  private renderer: WebGLRenderer;

  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit(): void {
    const hostElement: HTMLElement = this.elementRef.nativeElement;
    const box = hostElement.getBoundingClientRect();
    this.renderer = new WebGLRenderer();
    this.renderer.setSize(box.width, box.height);
    // renderer.setClearColor(0xb9d3ff, 1); // 设置背景颜色
    hostElement.appendChild(this.renderer.domElement);
    this.configure.emit({
      container: hostElement,
      renderer: this.renderer,
      width: box.width,
      height: box.height
    });
  }

  ngOnDestroy(): void {
    this.renderer.dispose();
    this.renderer = null;
  }

}
