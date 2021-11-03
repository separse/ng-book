import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../spotify.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  query = '';
  results!: any;
  id!: string;

  constructor(
    public spotifyService: SpotifyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.id = params['id']; });
    this.search(this.query);
  }

  search(query: string) {
    console.log('query:', query);
    if (!query) {
      return;
    }
    this.spotifyService.searchTrack(query)
      .subscribe((res: any) => console.log('Got object', res))
  }

  renderResults(res: any): void {
    this.results = null;
    if (res && res.tracks && res.tracks.items) {
      this.results = res.tracks.items;
    }
  }

  submit(query: string): void {
    this.router.navigate(['products'], { queryParams: { query: query } })
      .then(() => { this.search(query) });
  }

}
