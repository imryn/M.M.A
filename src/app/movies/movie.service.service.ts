import { Injectable } from '@angular/core';
import { Movie } from './movie.modle';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    new Movie('Harry Potter And The Goblet Of Fire', 2011, 'https://lh3.googleusercontent.com/k235-2W-gJ435FLcO_fy4x4P8Wb3TJ6R3lgmvdzOTm23adyOSb155VKrmXEXonkj8bXy',
    `The fourth movie in the Harry Potter franchise sees Harry (Daniel Radcliffe) returning for his fourth year at Hogwarts School
     of Witchcraft and Wizardry, along with his friends, Ron (Rupert Grint) and Hermione (Emma Watson). There is an upcoming
     tournament between the three major schools of magic, with one participant selected from each school by the Goblet of Fire.
     When Harry's name is drawn, even though he is not eligible and is a fourth player, he must compete in the dangerous contest.`),
    new Movie('Spider Man Far From Home', 2019,
    `https://spidermanfarfromhomefree.com/wp-content/uploads/2019/05/poster-spider-man-far-from-home-tom-holland.jpg`,
    `Following the events of Avengers: Endgame, Spider-Man must step up to take on new threats in a world that has changed forever.`),
    new Movie('Pirates Of The Caribbean: Dead Men Tell No Tales', 2017,
     `https://www.virginmegastore.ae/medias/sys_master/root/ha4/hb4/9098253238302/Pirates-of-the-Caribbean-Dead-Men-Tell-No-Tales-326275-Detail.jpg`,
     `Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more
      strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle.
      Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy
      alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.`)
  ];

  moviesChanged = new Subject<Movie[]>();

  constructor() { }

  getMovies() {
    return this.movies.slice();
  }

  searchByTitle(searchWord) {
      const items = this.getMovies();
      const regex = new RegExp(searchWord, 'i');
      return items.filter(item => regex.test(item.title));
  }

  addNewMovie(movie: Movie) {
    this.movies.push(movie);
    console.log(this.movies);
    this.moviesChanged.next(this.movies.slice());
  }

}
