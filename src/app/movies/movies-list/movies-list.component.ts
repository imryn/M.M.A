import { Component, OnInit, OnDestroy, Input} from '@angular/core';
import { Movie } from '../movie.modle';
import { MovieService } from '../movie.service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, OnDestroy {
  public movies: Movie[];
  private igChangeSub: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
    this.igChangeSub =  this.movieService.moviesChanged.subscribe(
      (movies: Movie[]) => {
      this.movies = movies;
    }
  );

  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }

}
