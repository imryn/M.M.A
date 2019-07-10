import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  movies: object;
  error: string;
  moviePlaceholder: string;

  constructor(private reviewService: ReviewService) {
    this.moviePlaceholder = "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/film-3385785534._CB483791896_.png";
  }


  ngOnInit() {
    this.reviewService.getReviewFromApi().subscribe(response => {
      console.log(response);
        if (response["status"] == "OK") {
          this.movies = response["results"].sort((a,b) => {
            this.error = "";
            return a.byline > b.byline ? -1 : 1
          });
        }
      });
  }

}
