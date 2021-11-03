import { fromEvent } from 'rxjs';
import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Result } from '../result.model';
import { YouTubeSearchService } from '../youtube-search.service';
import { debounceTime, filter, map, switchAll, tap } from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: '<input type="text" class="form-control" placeholder="Search" autofocus>'
})
export class SearchBoxComponent implements OnInit {
  @Output() loading = new EventEmitter<boolean>();
  @Output() results = new EventEmitter<Result[]>();

  constructor(
    private youtube: YouTubeSearchService,
    private el: ElementRef,
  ) { }

  ngOnInit(): void {
    fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value),
        filter((text: string) => text.length > 1),
        debounceTime(250),
        tap(() => this.loading.emit(true)),
        map((query: string) => this.youtube.search(query)),
        switchAll(),
      )
      .subscribe(
        (results: Result[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        () => { // on error
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }

}
