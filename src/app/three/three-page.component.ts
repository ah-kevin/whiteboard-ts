import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AxesHelper, BufferGeometry,
  CircleGeometry, Color, DirectionalLight, DoubleSide, Face3, FlatShading, Float32BufferAttribute, Geometry, Group,
  LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, MeshPhongMaterial,
  Object3D,
  OrthographicCamera,
  PerspectiveCamera, PointLight,
  Scene, Vector3,
  WebGLRenderer
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TimelineLite, Power0 } from 'gsap';


@Component({
  selector: 'three-page',
  templateUrl: './three-page.component.html',
  styleUrls: ['./three-page.component.less']
})
export class ThreePageComponent implements OnInit, OnDestroy {
  private radius = 3;
  private height = 6;
  private segments = 200;
  private animationDuration = 1.3;
  private scene: Scene;
  private camera: PerspectiveCamera;
  private renderer: WebGLRenderer;
  private parent: Object3D;
  private controls: OrbitControls;
  private material: MeshPhongMaterial;
  private circle1: Mesh;
  private circle2: Mesh;
  private tween = {
    angle: 0,
    circle1: -Math.PI / 2,
    circle2: Math.PI / 2
  };
  private wrapper: Mesh;
  private button: HTMLButtonElement;
  private tl: gsap.TimelineLite;
  private segLength = Math.PI * 2 * this.radius / this.segments;
  i = 0;
  private w: Vector3[];
  private range: HTMLInputElement;

  ngOnDestroy(): void {
    console.log(222);
    this.tl = null;
  }

  constructor() {
  }

  ngOnInit() {
    this.tl = new TimelineLite();
  }

  configureThree(data: { container: HTMLElement; renderer: WebGLRenderer; width: number; height: number }) {
    this.button = document.createElement('button');
    this.button.innerHTML = 'wrap';
    data.container.appendChild(this.button);

    this.range = document.createElement('input');
    this.range.type = 'range';
    this.range.min = '0';
    this.range.max = '1';
    this.range.step = '0.001';
    this.range.value = '0';
    data.container.appendChild(this.range);

    this.renderer = Object.assign({}, data.renderer);
    this.setScene(data.width, data.height);
    // console.log(this.scene);

  }

  private setScene(w: number, h: number) {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera(70, w / h, 1, 100);
    // 设置相机位置
    this.camera.position.set(11, 8, 12);
    // 设置相机方向(指向的场景对象)
    // this.camera.lookAt(this.scene.position);
    // 添加控制器
    this.addControls();

    // 添加材质
    this.addLineMesh();

    // 设置光源
    this.setLighting();

    // 添加坐标轴
    this.scene.add(new AxesHelper(5));

    // 将圆圈和图形装器放在父对象中，以便操作更容易
    this.parent = new Object3D();

    // draw
    this.draw();

    this.parent.position.set(-this.radius, this.height / 2, 0);
    this.parent.rotation.y = Math.PI;
    this.scene.add(this.parent);

    this.setAnimation();
    // 渲染
    this.renderer.render(this.scene, this.camera);
  }

  private addControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.addEventListener('change', () => {
      this.renderer.render(this.scene, this.camera);
    });
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
  }

  private addLineMesh() {
    // 线材质对象
    this.material = new MeshPhongMaterial({
      color: 0x335599,
      specular: 0x335599,
      shininess: 15,
      side: DoubleSide,
      flatShading: true,
      transparent: true,
      opacity: .8
    });

  }

  private draw() {
    this.addCircles();
    this.addWrapper();
  }

  private addCircles() {
    const circle = new CircleGeometry(this.radius, this.segments);
    this.circle1 = new Mesh(circle, this.material);
    this.circle2 = new Mesh(circle, this.material);
    this.circle1.rotation.x = this.circle2.rotation.x = Math.PI / 2;
    this.circle1.rotation.y = this.tween.circle1;
    this.circle2.rotation.y = this.tween.circle2;
    this.circle1.position.y = this.height / 2;
    this.circle2.position.y = -this.height / 2;

    this.moveCenter(this.circle1.geometry);
    this.moveCenter(this.circle2.geometry);
    this.parent.add(this.circle1, this.circle2);
  }

  private moveCenter(geo: Geometry | BufferGeometry) {
    // tslint:disable-next-line:prefer-for-of
    for (let j = 0; j < (geo as Geometry).vertices.length; j++) {
      (geo as Geometry).vertices[j].x -= this.radius / 2;
    }
    (geo as Geometry).verticesNeedUpdate = true;
  }

  private setLighting() {
    const light1 = new DirectionalLight(0xffffff);
    light1.position.set(-5, 10, 10);
    const light2 = new PointLight(0xffffff, .7, 0);
    light2.position.set(5, 5, -5);
    this.scene.add(light1, light2);
  }

  private addWrapper() {
    const geo = new Geometry();

    geo.vertices.push(new Vector3(0, this.height / 2, 0));
    geo.vertices.push(new Vector3(0, -this.height / 2, 0));
    for (let i = 0; i < Math.floor(this.segments / 2); i++) {
      geo.vertices.push(new Vector3(0, this.height / 2, this.segLength * i));
      geo.vertices.push(new Vector3(0, -this.height / 2, this.segLength * i));
      geo.vertices.push(new Vector3(0, this.height / 2, -this.segLength * i));
      geo.vertices.push(new Vector3(0, -this.height / 2, -this.segLength * i));
    }
    geo.faces.push(new Face3(0, 1, 2));
    geo.faces.push(new Face3(1, 2, 3));
    geo.faces.push(new Face3(0, 1, 4));
    geo.faces.push(new Face3(1, 4, 5));
    for (let i = 1; i < Math.floor(this.segments / 2); i++) {
      geo.faces.push(new Face3(2 + (i - 1) * 4, 3 + (i - 1) * 4, 6 + (i - 1) * 4));
      geo.faces.push(new Face3(3 + (i - 1) * 4, 6 + (i - 1) * 4, 7 + (i - 1) * 4));
      geo.faces.push(new Face3(4 + (i - 1) * 4, 5 + (i - 1) * 4, 8 + (i - 1) * 4));
      geo.faces.push(new Face3(5 + (i - 1) * 4, 8 + (i - 1) * 4, 9 + (i - 1) * 4));
    }
    this.wrapper = new Mesh(geo, this.material);
    this.parent.add(this.wrapper);
  }

  private setAnimation() {
    this.tl.to(this.tween, this.animationDuration, {
      angle: Math.PI / this.segments,
      circle1: 0,
      circle2: 0,
      ease: Power0.easeNone,
      onUpdate: () => this.update(),
      onComplete: () => {
        console.log('动画结束了');
        this.tl.pause();
      }
    });
    this.tl.progress(1);
    setTimeout(() => {
      this.tl.reverse();
    }, 800);
    this.range.addEventListener('input', () => {
      this.tl.pause();
      this.tl.progress(+this.range.value);
      this.button.innerHTML = this.tl.progress() > .5 ? 'unwrap' : 'wrap';
    }, false);
    this.button.addEventListener('click', () => {
      this.tl.progress() > 0.5 ? this.tl.reverse() : this.tl.play();
    });
  }

  private update() {
    // console.log('更新变化');
    // 变化2个圆 设置初始
    this.circle1.rotation.y = this.tween.circle1;
    this.circle2.rotation.y = this.tween.circle2;
    // 变化平面
    this.w = (this.wrapper.geometry as Geometry).vertices;
    this.w[2].x = this.w[3].x = this.w[4].x = this.w[5].x = -Math.sin(this.tween.angle) * this.segLength;
    this.w[2].z = this.w[3].z = Math.cos(this.tween.angle) * this.segLength;
    this.w[4].z = this.w[5].z = -Math.cos(this.tween.angle) * this.segLength;
    for (let i = 6; i < this.w.length; i++) {
      this.updateWrapper(i);
    }
    // 其余的顶点现在可以引用第四个前一个顶点，它们在算法中的引用
    // 重新渲染
    (this.wrapper.geometry as Geometry).verticesNeedUpdate = true;
    this.renderer.render(this.scene, this.camera);

    // ui
    this.range.value = this.tl.progress().toString();
    this.button.innerHTML = this.tl.progress() > .5 ? 'unwrap' : 'wrap';
  }

  private updateWrapper(vIndex) {
    // 来自的哪个面的顶点所属的原点
    const segIndex = Math.floor((vIndex + 2) / 4);
    const negate = (vIndex / 4 === Math.floor(vIndex / 4) || (vIndex - 1) / 4 === Math.floor((vIndex - 1) / 4)) ? -1 : 1;

    this.w[vIndex].x = this.w[vIndex - 4].x - Math.sin(this.tween.angle * (negate * (2 * segIndex - 1))) * this.segLength * negate;
    this.w[vIndex].z = this.w[vIndex - 4].z + Math.cos(this.tween.angle * (negate * (2 * segIndex - 1))) * this.segLength * negate;
  }

}
