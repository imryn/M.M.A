import { Component, OnInit, Input, HostBinding, Output, HostListener, EventEmitter, ViewChild } from '@angular/core';
import { Movie } from '../../movie.modle';

@Component({
  selector: 'app-movies-item',
  templateUrl: './movies-item.component.html',
  styleUrls: ['./movies-item.component.scss']
})
export class MoviesItemComponent implements OnInit {
  @Input() movie: Movie;
  @Output() select = new EventEmitter();

  @HostBinding('class')
  get getClass() {
    return 'list-group-item clearfix pull-left';
  }

  @HostListener('click', ['$event'])
  onSelect() {
    this.select.emit(this.movie);
  }

  constructor() { }

  ngOnInit() {
    
  }

}
