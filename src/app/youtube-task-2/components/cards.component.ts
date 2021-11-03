import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `
  <div class="card" style="width: 18rem;">
    <img [src]="card.thumbnailUrl" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ card.title }}</h5>
      <p class="card-text">{{ card.desc }}</p>
      <a [href]="card.videoUrl" class="btn btn-primary">Watch</a>
    </div>
  </div>
  `,
})
export class CardsComponent implements OnInit, OnChanges {
  @Input() card!: any;

  constructor() { }

  ngOnChanges() {
    console.log(this.card);
  }

  ngOnInit(): void {
  }

}
