import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  showMore: boolean = true;
  otherShowMore: boolean = true;
  text: string = ` Set fourth second replenish be appear. Was that dry firmament unto one they're doesn't kind tree is beast fifth, air subdue air him deep fish female to. Was itself fruitful, light. Moveth moving. Kind lights signs.
  Also give subdue. Whales first their sixth years shall set upon divided living. To above firmament, third that gathered fly made midst bring us above wherein the have form day.  
  Set fifth and seasons, subdue, saw, darkness moveth moveth rule make she'd to them Without one she'd behold they're. Seed gathering brought meat open can't be life moving under whose god own meat firmament.`;
  readMore() {
    this.showMore = !this.showMore;
  }
  otherReadMore() {
    this.otherShowMore = !this.otherShowMore;
  }
}
