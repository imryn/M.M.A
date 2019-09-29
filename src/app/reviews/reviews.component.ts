import { Component, OnInit, OnDestroy } from '@angular/core';
import { ReviewService } from '../review.service';
import { MovieService } from '../movies/movie.service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit, OnDestroy {
  movies: object;
  error: string;
  moviePlaceholder = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png';
  onSearchSubscription: Subscription;

  constructor(private reviewService: ReviewService, private movieService: MovieService) {
    this.onSearchSubscription = this.movieService.onSearch.subscribe(this.getReviewFromApi.bind(this));
  }

  getReviewFromApi(searchWord?) {
    this.reviewService.getReviewFromApi(searchWord).subscribe((response: any) => {
      if (response.status === 'OK') {
        this.error = '';
        this.movies = response.results.sort((a, b) => a.byline > b.byline ? -1 : 1);
      }
    });
  }

  ngOnInit() {
    this.getReviewFromApi();
  }

  ngOnDestroy() {
    this.onSearchSubscription.unsubscribe();
  }

}
