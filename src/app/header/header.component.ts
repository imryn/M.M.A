import { Component, OnInit } from '@angular/core';
import { Movie } from '../movies/movie.modle';
import { MovieService } from '../movies/movie.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchValue: string;
  movieData: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onSearchForMovie() {
    if (this.searchValue) {
      this.movieData = this.movieService.searchByTitle(this.searchValue);
    } else {
      this.movieService.getMovies();
    }
  }

}
