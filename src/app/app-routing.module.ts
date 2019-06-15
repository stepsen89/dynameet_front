import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './main/main.component';
import { RoomsComponent } from './main/rooms/rooms.component';
import { RoomComponent } from './main/rooms/room/room.component';
import { BookingComponent } from './main/booking/booking.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent 
  },
  { 
    path: 'main', 
    component: MainComponent,
    children: [
      {
        path: 'booking',
        component: BookingComponent,
      },{
        path: 'rooms',
        component: RoomsComponent,
      }, {
        path: 'rooms/:id',
        component: RoomComponent
      }
    ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
