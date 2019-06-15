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

  constructor(
    db: AngularFireDatabase
  ) { 
    this.rooms = db.object('roomDetails').valueChanges().subscribe((res) => {
      this.roomsArray = Object.values(res);
      console.log(this.roomsArray);
    });
  }
}
