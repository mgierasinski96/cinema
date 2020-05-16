import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {MyTableComponent} from '../../components/my-table/my-table.component';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';
export interface PeriodicElement {
  title: string;
  year: number;
  poster: HTMLImageElement;
}

@Component({
  selector: 'app-root',
  templateUrl: './searchMovies.component.html',
  styleUrls: ['./searchMovies.component.scss']
})
export class SearchMoviesComponent implements OnInit {
  @ViewChild('myChild') private myChild: MyTableComponent;
  @ViewChild('myMoveDetails') private myMovieDetails: MovieDetailsComponent;
  movieTitle: any;
  movies: any;
  tableData: PeriodicElement[];

  columnHeader = {'Title': 'Tytuł', 'Year': 'Rok', 'Poster': 'Plakat'};
  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
  }
  onSearchChange(searchValue: string) {
    this.movieService.getMovies(searchValue).subscribe(response => {
      this.tableData = response;
      if (this.tableData !== undefined && this.tableData !== null) {
        this.myChild.init(this.tableData);
        document.getElementById('myMovie').style.display = 'inline-block';
      }
    });
  }

  performAction(event) {
    console.log(event.nodeName);
    if (event.type !== 'button' && event.nodeName !== 'DIV' && event.nodeName !== 'TH') {
      this.movieTitle = event.parentNode.children[0]?.children[0]?.innerText ||
        event.parentNode.parentNode?.children[0]?.children[0]?.innerText
     console.log(this.movieTitle);
      this.myMovieDetails.init(this.movieTitle);
      document.getElementById('detailsContainer').style.display = 'inline-block';
    }
  }

}
