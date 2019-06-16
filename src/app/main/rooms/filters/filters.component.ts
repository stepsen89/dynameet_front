import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() slots: any;

  showThis: Boolean = false;
  showThisSlots: Boolean = false;

  constructor() { }

  ngOnInit() {
    console.log(this.slots);
  }

  drop(){
    this.showThis ? this.showThis = false : this.showThis = true;
  }

  dropSlot(){
    console.log("jljl");
    this.showThisSlots ? this.showThisSlots = false : this.showThisSlots = true;
    console.log(this.showThisSlots)
  }
}
