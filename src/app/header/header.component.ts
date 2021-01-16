import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../movies/movie.modle';
import { MovieService } from '../movies/movie.service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  movieData: Movie[];
  isShown = false;
  
  constructor() { }

  ngOnInit() {
  }

  

}
