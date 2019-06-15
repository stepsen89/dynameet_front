import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RoomsComponent } from './main/rooms/rooms.component';
import { RoomComponent } from './main/rooms/room/room.component';
import { BookingComponent } from './main/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent,
    MenuComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    RoomsComponent,
    RoomComponent,
    BookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
