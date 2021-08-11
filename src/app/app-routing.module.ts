import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandComponent } from './band/band.component';
import { BiografyComponent } from './biografy/biografy.component';
import { ContactComponent } from './contact/contact.component';
import { DiscografyComponent } from './discografy/discografy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'biografy',component:BiografyComponent},
  {path:'band',component:BandComponent},
  {path:'discografy',component:DiscografyComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'store',component:StoreComponent},
  {path:'schedule',component:ScheduleComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',pathMatch:'full',redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
