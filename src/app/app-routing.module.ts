import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import 'hammerjs';
import { PoemsComponent } from './poems/poems.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'poem', component: PoemsComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'contact', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
