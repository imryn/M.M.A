import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ReviewService } from '../../review.service';
import { MovieService } from '../../movies/movie.service.service';
import { Subscription } from 'rxjs';
import { Review } from '../review.typing';

@Component({
  selector: 'app-reviews-item',
  templateUrl: './reviews-item.component.html',
  styleUrls: ['./reviews-item.component.scss']
})
export class ReviewsItemComponent implements OnInit {

  reviews: Review[];
  error: string;
  private static readonly reviewPlaceholder = 'https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png';
  onSearchSubscription: Subscription;

  constructor(private reviewService: ReviewService, private movieService: MovieService) {
    this.onSearchSubscription = this.movieService.onSearch.subscribe(this.getReviewFromApi.bind(this));
  }

  getReviewFromApi(searchWord ='spider-man') {
    this.reviewService.getReviewFromApi(searchWord).subscribe((response: any) => {
      if (response.status === 'OK') {
        this.error = '';
        console.log(response.results);
        this.reviews = response.results.sort((a, b) => a.byline > b.byline ? -1 : 1);
      }
    });
  }

  ngOnInit() {
    this.getReviewFromApi();
  }

  ngOnDestroy() {
    this.onSearchSubscription.unsubscribe();
  }

  getReviewImg(review: Review) {
    return review.multimedia != null ? review.multimedia.src :  ReviewsItemComponent.reviewPlaceholder;
  }

  

}
