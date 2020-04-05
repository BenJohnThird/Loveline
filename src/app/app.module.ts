import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PoemsComponent } from './poems/poems.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from  '@ngx-gallery/core';
import { GALLERY_CONFIG } from '@ngx-gallery/core';
import 'hammerjs';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    PoemsComponent,
    GalleryComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GalleryModule,
    GalleryModule.withConfig({}),
    //MaterialModule,
    AppRoutingModule
  ],
  providers: [    
    {
      provide: GALLERY_CONFIG,
      useValue: {
        dots: true,
        imageSize: 'cover'
      }
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
