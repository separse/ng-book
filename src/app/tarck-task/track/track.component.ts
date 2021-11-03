import { SpotifyService } from './../spotify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.scss']
})
export class TrackComponent implements OnInit {
  id!: any;
  track!: any;

  constructor(public spotifyService: SpotifyService) { }

  ngOnInit(): void {
     this.spotifyService
     .getTrack(this.id)
     .subscribe((res: any) => console.log(res));
  }

  back() {}

}
