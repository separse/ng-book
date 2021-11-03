import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  static BASE_URL = "https://api.spotify.com/v1";

  constructor(public http: HttpClient) { }

  searchTrack(query: string): Observable<any> {
    return this.search(query, "track");
  }

  getTrack(id: string): Observable<any> {
    return this.query(`/tracks/${id}`);
  }

  search(query: string, type: string): Observable<any> {
    return this.query(`/search`, [`q=${query}`, `type=${type}`]);
  }

  query(URL: string, params?: string[]): Observable<any> {
    let queryURL = `${SpotifyService.BASE_URL}${URL}`;
    if (params) {
      queryURL = `${queryURL}?${params.join("&")}`;
    }
    // const apiKey = environment.spotifyApiKey;
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${apiKey}`
    // });
    const options = {
      // headers: headers
    };

    return this.http.request("GET", queryURL, options);
  }

  // searchTrack(query: string) {
  //   let params: string = [
  //     `q=${query}`,
  //     `type=track`
  //   ].join("&");
  //   console.log(params);
  //   return this.http.get(`https://api.spotify.com/v1/search?${params}`);
  // }
}
