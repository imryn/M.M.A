import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../movie.modle';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;


  constructor() { }

  ngOnInit() {
  }

}
