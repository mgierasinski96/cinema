import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MovieService} from '../../services/movie.service';
import {RoomService} from '../../services/room.service';
import {MyTableComponent} from '../../components/my-table/my-table.component';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';
import {FormControl, FormGroup} from '@angular/forms';
import {SeatService} from '../../services/seat.service';
import {Router} from '@angular/router';
export interface PeriodicElement {
  id: string;
  title: string;
  showStartsAt: Date;
  ticketPrice: string;
  left: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './played-movies.component.html',
  styleUrls: ['./played-movies.component.scss']
})
export class PlayedMoviesComponent implements OnInit, OnDestroy {
  @ViewChild('myChild') private myChild: MyTableComponent;
  @ViewChild('myMoveDetails') private myMovieDetails: MovieDetailsComponent;
  tableData: PeriodicElement[];
  interval;
  movieTitle;
  moveIdentificator;
  seats;
  selectedSeats = [];

  columnHeader = {'id': 'Identyfikator', 'title': 'Tytuł', 'ticketPrice': 'Cena[zł]', 'showStartsAt': 'Seans o', 'left': 'Pozostało'};
  constructor(private movieService: MovieService, private seatService: SeatService, private router: Router) {
  }

  ngOnInit() {
    this.movieService.getPlayedMovies().subscribe(response => {
      this.tableData = response;
      if (this.tableData !== undefined && this.tableData !== null) {
        for (let i = 0; i < this.tableData.length; i++) {
          const startsAt = this.tableData[i].showStartsAt;
          const endDate = new Date(startsAt);
          // endDate.setTime(endDate.getTime() + (24 * howLongWorking * 60 * 1000));
          this.interval = setInterval(() => {
            const now = new Date();
            const diffMs = endDate.valueOf() - now.valueOf();
            const diffDays = Math.floor((diffMs / 86400000)); // days
            const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
            const diffMins = Math.floor(((diffMs % 86400000) % 3600000) / 60000); // minutes
            const diffSec = Math.round((((diffMs % 86400000) % 3600000) % 60000) / 1000); // secocds
            this.tableData[i] = {id: this.tableData[i].id.toString(), title: this.tableData[i].title, showStartsAt:
                new Date(this.tableData[i].showStartsAt) , ticketPrice: this.tableData[i].ticketPrice.toString(), left:
                diffDays + 'd:' + diffHrs + 'h:' + diffMins + 'm:' + diffSec + 's'};
            this.myChild.init(this.tableData);
          }, 1000);
        }
      }
    });
  }
  performAction(event) {
    if (event.type !== 'button' && event.nodeName !== 'DIV' && event.nodeName !== 'TH' && event.nodeName !== 'INPUT') {
      this.moveIdentificator = event.parentNode.children[0]?.children[0]?.innerText ||
        event.parentNode.parentNode?.children[0]?.children[0]?.innerText
      this.movieTitle = event.parentNode.children[1]?.children[0]?.innerText ||
        event.parentNode.parentNode?.children[1]?.children[0]?.innerText
      this.myMovieDetails.init(this.movieTitle);
      (<HTMLButtonElement>document.getElementById('myReservationButton')).disabled = true;
      document.getElementById('detailsContainer').style.display = 'inline-block';
      this.seatService.getSeatsForMovieId(this.moveIdentificator).subscribe(response => {
       this.seats = response;
      });

    }
  }

  ngOnDestroy(): void {
      clearInterval(this.interval);
  }

  reserveSeat(seat, target) {
    console.log(target.className);
    if (target.className.includes('free')) {
      target.className = 'selected';
      this.selectedSeats.push(seat);
      (<HTMLButtonElement>document.getElementById('myReservationButton')).disabled = false;
    } else if (target.className.includes('selected')) {
      target.className = 'free';
      this.selectedSeats.splice(this.selectedSeats.indexOf(seat), 1);
      if (this.selectedSeats.length === 0) {
        (<HTMLButtonElement>document.getElementById('myReservationButton')).disabled = true;
      }
    } else {
      console.log('to miejsce jest zajete');
    }
  }

  contiunueReservation() {
    this.router.navigate(['/reserveTicket', JSON.stringify(this.selectedSeats), this.moveIdentificator]);
  }
}

