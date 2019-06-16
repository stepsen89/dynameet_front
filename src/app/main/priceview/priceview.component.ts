import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-priceview',
  templateUrl: './priceview.component.html',
  styleUrls: ['./priceview.component.scss']
})
export class PriceviewComponent {
  roomPrices: any;

  constructor(
    public db: AngularFireDatabase
  ) { 
    this.roomPrices = db.object('roomPrices').valueChanges().subscribe((res) => {
      const rooms = Object.values(res);
      console.log(this.roomPrices);
    });
  }

}
