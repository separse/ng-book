import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './result.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const YOUTUBE_API_KEY = 'AIzaSyCtGPrWbCYLIz5UILx3dOcrUDEmjHZVQdA'
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search'

@Injectable()
export class YouTubeSearchService {

  constructor(
    private http: HttpClient,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string,
  ) { }

  search(query: string): Observable<Result[]> {
    const params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&')
    const queryUrl = `${this.apiUrl}?${params}`
    return this.http.get<Result[]>(queryUrl).pipe(
      map((response: any) => {
        return <any>response['items']
        .map((item: any) => {
          return new Result({
            id: item.id.videoId,
            title: item.snippet.title,
            desc: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          })
        })
      })
    )
  }
}
