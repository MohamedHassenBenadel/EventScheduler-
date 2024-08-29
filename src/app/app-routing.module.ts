import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './ADMIN/dashboard/dashboard.component';
import { AdminnavbarComponent } from './ADMIN/adminnavbar/adminnavbar.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path : 'events', component:EventsComponent},
  { path : 'gallery', component:GalleryComponent},
  { path : 'contact', component:ContactComponent},
  { path : 'dashboard', component:DashboardComponent},
  { path : 'navadmin', component:AdminnavbarComponent},
  { path : 'signin', component:SigninComponent},
  { path : 'signup', component:SignupComponent},
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
