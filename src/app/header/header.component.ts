import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.modle';
import { MovieService } from '../movies/movie.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  searchValue: string;
  movieData: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSearchForReview() {
    this.movieService.onReviewSearch(this.searchValue);
  }

}
