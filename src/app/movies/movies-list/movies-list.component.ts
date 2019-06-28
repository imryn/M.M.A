import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie.modle';
import { MovieService } from '../movie.service.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}
