import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getReviewFromApi() {
    const result = this.http.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json
    ?query=spider-man&api-key=zMg7Ruf3pIFuTOUaIOHgqHLVu2hCoFkM`);
    return result;
  }
}
