import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable()
export class MovieService {

  private API_URL_GET_MOVIE = 'http://localhost:8080/movies/';


  constructor(private httpClient: HttpClient) {
  }

  getMovies(title: String): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_GET_MOVIE + title);

  }
  getMovieDetails(title: String): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_GET_MOVIE + 'movieDetails/' + title);
  }
  getPlayedMovies(): Observable<any> {
    return this.httpClient.get<any>(this.API_URL_GET_MOVIE + 'playedMovies');
  }

}
