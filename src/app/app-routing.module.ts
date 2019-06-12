import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StageComponent } from './stage/stage.component';
import { ThreePageComponent } from './three/three-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'three'},
  {path: 'stage', component: StageComponent},
  {path: 'three', component: ThreePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
