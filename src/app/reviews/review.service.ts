import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private static readonly NY_TIMES_API = 'https://api.nytimes.com';
  private static readonly API_KEY = 'zMg7Ruf3pIFuTOUaIOHgqHLVu2hCoFkM';

  constructor(private http: HttpClient) { }

  getReviewFromApi(searchWord) {
    return this.http.get(`${ReviewService.NY_TIMES_API}/svc/movies/v2/reviews/search.json
    ?query=${searchWord}&api-key=${ReviewService.API_KEY}`);
  }
}
