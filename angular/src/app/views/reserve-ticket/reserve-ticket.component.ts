import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SeatService} from '../../services/seat.service';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-reserve-ticket',
  templateUrl: './reserve-ticket.component.html',
  styleUrls: ['./reserve-ticket.component.scss']
})
export class ReserveTicketComponent implements OnInit {
  seats;
  movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {

   this.seats = JSON.parse(this.route.snapshot.params['seats']);
   console.log(this.seats);
   this.movieService.getMovieInRoomById(this.route.snapshot.params['movieIdentificator']).subscribe( response => {
     this.movie = response;
     console.log(this.movie);
   })
    ;

  }

  confirmReservation() {
    alert('Wlasnie kupiles bilety');
  }


}
