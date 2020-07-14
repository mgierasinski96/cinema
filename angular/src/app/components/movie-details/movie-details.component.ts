import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movieTitle;
  movie;
  constructor(private movieService: MovieService) {
  }
  ngOnInit() {
    if (this.movieTitle !== undefined) {
      this.movieService.getMovieDetails(this.movieTitle).subscribe(response => {
        this.movie = response;
      });
    }
  }
  init(data) {
    this.movieTitle = data;
    this.ngOnInit();
  }

  closeMe() {
    document.getElementById('detailsContainer').style.display = 'none';
  }
}
