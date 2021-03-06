import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MoviesItemComponent } from './movies/movies-list/movies-item/movies-item.component';
import { HeaderComponent } from './header/header.component';
import { AddNewMovieModalComponent } from './movies/add-new-movie-modal/add-new-movie-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ReviewsItemComponent } from './reviews/reviews-item/reviews-item.component';
import { ControlMessagesComponent } from './control-messages/control-messages.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewSearchComponent } from './reviews/review-search/review-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesListComponent,
    MoviesItemComponent,
    HeaderComponent,
    AddNewMovieModalComponent,
    AboutComponent,
    ReviewsItemComponent,
    ControlMessagesComponent,
    ReviewsComponent,
    ReviewSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
