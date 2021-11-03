import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  search(searchKey: string) {
    const params: string = [
      `q=${searchKey}`,
      `key=AIzaSyCtGPrWbCYLIz5UILx3dOcrUDEmjHZVQdA`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');

    return this.http.get<any>(`https://www.googleapis.com/youtube/v3/search?${params}`)
  }

}
