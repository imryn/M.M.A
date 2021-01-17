import { Component, OnInit,Input, Output, EventEmitter, ViewChild  } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Movie } from '../movie.modle';
import { Observable} from 'rxjs';
import { MovieService } from '../movie.service.service';
import { ValidationService } from '../../validation-service.service';


@Component({
  selector: 'app-add-new-movie-modal',
  templateUrl: './add-new-movie-modal.component.html',
  styleUrls: ['./add-new-movie-modal.component.scss'],
  animations: [
    trigger('addMovie', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'scale3d(.0, .0, .0)' }))
      ])
    ])
  ]
})
export class AddNewMovieModalComponent implements OnInit {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  newMovieForm: FormGroup;
  allMovies: Observable<Movie[]>;
  dataSaved: boolean;
  message = null;


  constructor(private formBuilder: FormBuilder, private movieService: MovieService) { }

  ngOnInit() {
    this.newMovieForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      year: new FormControl('', [Validators.required, ValidationService.DateValidator]),
      imagePath: new FormControl('', [Validators.required, ValidationService.ImgValidator]),
      summary: new FormControl('', [Validators.required, ValidationService.TextValidator])
    });
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

onSubmit() {
    this.dataSaved = false;
    const movie = this.newMovieForm.value;
    console.log(movie);
    this.addNewMovie(movie);
  }

addNewMovie(movie: Movie) {
    if (this.newMovieForm !== null) {
      this.dataSaved = true;
      this.movieService.addNewMovie(movie);
      this.newMovieForm.reset();

    } else {
      this.message = 'one of the fields is wrong';
      alert(this.message);
    }
  }

}
