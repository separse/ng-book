import { Component } from '@angular/core';
import { Result } from '../result.model';

@Component({
  selector: 'app-youtube-search',
  template: `
  <div class="container">
    <div class="page-header">
      <h1>
        YouTube Search
        <img
          style="float: right"
          *ngIf="loading"
          src="assets/images/loading.gif"
        />
      </h1>
    </div>
    <div class="row">
      <div class="input-group input-group-lg col-md-12">
        <app-search-box
          (loading)="loading = $event"
          (results)="updateResults($event)"
        ></app-search-box>
      </div>
    </div>
    <div class="row">
      <app-search-result *ngFor="let result of results" [result]="result">
      </app-search-result>
    </div>
  </div>
  `,
})
export class YoutubeSearchComponent {
  results!: Result[];
  loading!: boolean;

  updateResults(results: Result[]): void {
    this.results = results;
  }
}
