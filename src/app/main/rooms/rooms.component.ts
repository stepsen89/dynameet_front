import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  rooms: any;

  constructor(
    db: AngularFireDatabase
  ) { 
    this.rooms = db.object('roomDetails').valueChanges().subscribe((res) => console.log(res));
  }

  ngOnInit() {
  }

}
