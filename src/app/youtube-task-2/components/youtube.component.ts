import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube',
  template: `
  <div><app-search (onSearch)="changeCards($event)"></app-search></div>
  <section style="display: grid;">
    <app-cards *ngFor="let card of cards" [card]="card"></app-cards>
  </section>
  `,
})
export class YoutubeComponent implements OnInit {
  cards: any;

  constructor() { }

  ngOnInit(): void {
  }

  changeCards(event: any) {
    this.cards = event;
  }

}
