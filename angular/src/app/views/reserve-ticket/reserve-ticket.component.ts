import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SeatService} from '../../services/seat.service';
import {MovieService} from '../../services/movie.service';
import {FormControl, FormGroup} from '@angular/forms';
import {TokenStorage} from '../../core/token.storage';

@Component({
  selector: 'app-reserve-ticket',
  templateUrl: './reserve-ticket.component.html',
  styleUrls: ['./reserve-ticket.component.scss']
})
export class ReserveTicketComponent implements OnInit {
  seats;
  movie;
  newReservation = new FormGroup({
    reservedSeat: new FormControl(''),
    movieInRoom: new FormControl(''),
    username: new FormControl('')
  });

  constructor(private router: Router, private token: TokenStorage, private route: ActivatedRoute, private movieService: MovieService, private seatService: SeatService) { }

  ngOnInit(): void {

   this.seats = JSON.parse(this.route.snapshot.params['seats']);
   console.log(this.seats);

   this.movieService.getMovieInRoomById(this.route.snapshot.params['movieIdentificator']).subscribe( response => {
     this.movie = response;
   })
    ;
  }

  confirmReservation() {
    this.newReservation.controls['reservedSeat'].setValue(this.seats);
    this.newReservation.controls['movieInRoom'].setValue(this.movie);
    this.newReservation.controls['username'].setValue(this.token.getUsername());
    this.seatService.makeReservation(this.newReservation.value).subscribe();
    this.router.navigate(['/playedMovies']);
  }


}
