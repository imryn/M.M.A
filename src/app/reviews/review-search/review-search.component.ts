import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movies/movie.service.service';

@Component({
  selector: 'app-review-search',
  templateUrl: './review-search.component.html',
  styleUrls: ['./review-search.component.scss']
})
export class ReviewSearchComponent {

  searchValue: string;

  constructor(private movieService: MovieService) { }

  onSearchForReview() {
    this.movieService.onReviewSearch(this.searchValue);
  }

}
