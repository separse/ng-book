import { ApiService } from './../api.service';
import { Component, EventEmitter, OnInit, Output, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, filter, map, switchAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  template: `<input type="text">`,
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter();

  constructor(private el: ElementRef, private apiService: ApiService) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup').pipe(
      map((res: any) => res.target.value),
      tap(console.log),
      filter((searchKey: string) => searchKey.length > 1),
      debounceTime(250),
      map((searchKey: string) => this.apiService.search(searchKey).pipe(
        map((res: any) => res.items.map((item: any) => {
          return {
            id: item.id.videoId,
            title: item.snippet.title,
            desc: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url,
            videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`,
          }
        })
        ),
      )),
      switchAll(),
    ).subscribe((searchResult: any) => this.onSearch.emit(searchResult));
  }

}
