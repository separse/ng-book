import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './youtube-task/components/search-box.component';
import { SearchResultComponent } from './youtube-task/components/search-result.component';
import { YoutubeSearchComponent } from './youtube-task/components/youtube-search.component';
import { YouTubeSearchService } from './youtube-task/youtube-search.service';
import { YouTubeServiceInjectables } from './youtube-task/youtube-search.injectables';
import { YoutubeComponent } from './youtube-task-2/components/youtube.component';
import { SearchComponent } from './youtube-task-2/components/search.component';
import { CardsComponent } from './youtube-task-2/components/cards.component';
import { ApiService } from './youtube-task-2/api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent,
    YoutubeComponent,
    SearchComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [YouTubeSearchService, YouTubeServiceInjectables, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
