import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  rooms: any;
  roomsArray: any;
  roomBookings: any;

  constructor(
    db: AngularFireDatabase
  ) {
    this.rooms = db.object('roomDetails').valueChanges().subscribe((res) => {
      this.roomsArray = Object.values(res);
      console.log(this.roomsArray);
    });

    this.roomBookings = db.object('roomBookings').valueChanges().subscribe((res) => {
      const rooms = Object.values(res);
      this.roomBookings = rooms.map(room => Object.keys(room).filter(bookingDateForRoom => !rooms[bookingDateForRoom]).splice(1, 8));
      console.log(this.roomBookings);
    });
  }
}
