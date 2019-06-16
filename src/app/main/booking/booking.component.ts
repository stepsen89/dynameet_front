import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  showModal: Boolean = false;
  showItem: Boolean = false;;

  constructor(
    public db: AngularFireDatabase
  ) { }

  ngOnInit() {
  }

  showModalOnScreen(){
    console.log("jljl");
    this.showModal ? this.showModal = false : this.showModal = true;
    console.log(this.showModal)
  }

  removeListItem(){
    console.log("done");
    this.showModal ? this.showModal = false : this.showModal = true;

    this.showItem = this.showItem = true;
    const itemRef = this.db.object('roomBookings/room1');
    itemRef.update({'06-15-2019:19:00:00': "hljkljl"});
    console.log(itemRef);
  }
}
