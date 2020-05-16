import {Component, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {RoomService} from '../../services/room.service';
import {MyTableComponent} from '../../components/my-table/my-table.component';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';
import {FormControl, FormGroup} from '@angular/forms';
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
  roomNumber;
  allRooms;
  dateTime;
  tableData: PeriodicElement[];
  newMovieForm = new FormGroup({
    movieTitle: new FormControl(''),
    roomNumber: new FormControl(''),
    dateTime: new FormControl(''),
  });

  columnHeader = {'Title': 'Tytuł', 'Year': 'Rok', 'Poster': 'Plakat'};
  constructor(private movieService: MovieService, private roomService: RoomService) {
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
    if (event.type !== 'button' && event.nodeName !== 'DIV' && event.nodeName !== 'TH' && event.nodeName !== 'INPUT') {
      this.roomNumber = 1;
      this.movieTitle = event.parentNode.children[0]?.children[0]?.innerText ||
        event.parentNode.parentNode?.children[0]?.children[0]?.innerText
     console.log(this.movieTitle);
      this.myMovieDetails.init(this.movieTitle);
      document.getElementById('detailsContainer').style.display = 'inline-block';
      this.roomService.getAllRooms().subscribe(response => {
        this.allRooms = response;
      });
    }
  }
  selectedType(id: any) {
    console.log(id);
    this.roomNumber = id;
  }
  onChange(data) {
    this.dateTime = data;
  }

  addTo() {
    this.newMovieForm.controls['roomNumber'].setValue(this.roomNumber);
    this.newMovieForm.controls['movieTitle'].setValue(this.movieTitle);
    this.newMovieForm.controls['dateTime'].setValue(this.dateTime);
    this.roomService.addMovieToRoom(this.newMovieForm.value).subscribe();
    this.myMovieDetails.closeMe();
  }
  hasError(controlName) {
    return this.newMovieForm.get(controlName).hasError;
  }

}
