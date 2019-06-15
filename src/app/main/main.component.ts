import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  items: any;

  constructor(
     db: AngularFireDatabase,
  ) { 
    this.items = db.object('roomPrices').valueChanges().subscribe((res) => console.log(res));
  }

  ngOnInit() {
    console.log(this.items);
  }
}
