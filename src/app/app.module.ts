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
import { TrackSearchComponent } from './tarck-task/track-search/track-search.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './tarck-task/home.component';
import { AboutComponent } from './tarck-task/about.component';
import { ContractComponent } from './tarck-task/contract.component';
import { LoginComponent } from './tarck-task/login/login.component';
import { ProtectedComponent } from './tarck-task/protected.component';
import { ProductsComponent } from './tarck-task/products/products.component';
import { ProductComponent } from './tarck-task/product/product.component';
import { TrackComponent } from './tarck-task/track/track.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    SearchResultComponent,
    YoutubeSearchComponent,
    YoutubeComponent,
    SearchComponent,
    CardsComponent,
    TrackSearchComponent,
    HomeComponent,
    AboutComponent,
    ContractComponent,
    LoginComponent,
    ProtectedComponent,
    ProductsComponent,
    ProductComponent,
    TrackComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [YouTubeSearchService, YouTubeServiceInjectables, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
