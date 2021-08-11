import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiografyComponent } from './biografy/biografy.component';
import { BandComponent } from './band/band.component';
import { DiscografyComponent } from './discografy/discografy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { StoreComponent } from './store/store.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BiografyComponent,
    BandComponent,
    DiscografyComponent,
    GalleryComponent,
    StoreComponent,
    ScheduleComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
