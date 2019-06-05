import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { StageComponent } from './stage/stage.component';
import { ThreePageComponent } from './three/three-page.component';
import { ThreeDirective } from './directive/three.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    StageComponent,
    ThreePageComponent,
    ThreeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
