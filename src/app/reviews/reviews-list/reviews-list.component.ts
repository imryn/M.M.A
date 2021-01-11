import { Component, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from 'src/app/movies/movie.service.service';
import { ReviewService } from 'src/app/review.service';

//@Component({
 // selector: 'app-reviews-list',
 // templateUrl: './reviews-list.component.html',
 // styleUrls: ['./reviews-list.component.scss']
//})
// export class ReviewsListComponent implements OnInit {

  // @Output() reviews: object;
  // error: string;
  // reviewPlaceholder = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png';
  // onSearchSubscription: Subscription;

  // constructor(private reviewService: ReviewService, private movieService: MovieService) {
  //   this.onSearchSubscription = this.movieService.onSearch.subscribe(this.getReviewFromApi.bind(this));
  // }

  // getReviewFromApi(searchWord?) {
  //   this.reviewService.getReviewFromApi(searchWord).subscribe((response: any) => {
  //     if (response.status === 'OK') {
  //       this.error = '';
  //       console.log(response.results);
  //       this.reviews = response.results.sort((a, b) => a.byline > b.byline ? -1 : 1);
  //     }
  //   });
  // }

  // ngOnInit() {
  //   this.getReviewFromApi();
  // }

  // ngOnDestroy() {
  //   this.onSearchSubscription.unsubscribe();
  // }

//}
