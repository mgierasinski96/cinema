import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {MyTableComponent} from '../my-table/my-table.component';
import {Router} from '@angular/router';


export interface ReservationDetailsModel {
  roomNumber: string;
  ticketPrice: string;
  title: string;
  seatNumber: string;
  reservationDate: Date;
  showStartsAt: Date;
}
@Component({
  selector: 'app-user-details-component',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() username;
  user;
  reservations;
  tableData: ReservationDetailsModel[] = [];
  @ViewChild('myChild') private myChild: MyTableComponent;
  columnHeader = {'reservationDate': 'Data rezerwacji', 'title': 'Tytuł', 'seatNumber': 'Miejsce', 'roomNumber': 'Sala', 'showStartsAt': ' Data seansu', 'ticketPrice': 'Cena biletu'};
  constructor(private router: Router, private userService: UserService) {
  }
  ngOnInit() {
    if (this.username !== undefined) {
      this.tableData = [];
      this.userService.getUserByUsername(this.username).subscribe(response => {
        this.user = response;
        this.userService.getReservedSeatsForUsername(this.user.username).subscribe(response1 => {
          this.reservations = response1;
          for (let i = 0; i < this.reservations.length; i++) {
            const data =  {} as ReservationDetailsModel;
            console.log(new Date(this.reservations[i].reservationDate));
            data.reservationDate = new Date(this.reservations[i].reservationDate);
            data.roomNumber = this.reservations[i].movieInRoom.room.roomNumber;
            data.seatNumber = this.reservations[i].seatNumber;
            data.ticketPrice = this.reservations[i].movieInRoom.ticketPrice;
            data.title = this.reservations[i].movieInRoom.title;
            data.showStartsAt = new Date(this.reservations[i].movieInRoom.showStartsAt);
            this.tableData.push(data);
          }
          this.myChild.init(this.tableData);

        });
      });
    }
  }
  init(data) {
    this.username = data;
    this.ngOnInit();
  }
  deleteHim()
  {

    this.userService.removeUser(this.username).subscribe(response => {
   this.closeMe();
      this.router.navigate(['/appUsers']);

    });
  }
  closeMe() {
    document.getElementById('detailsContainer').style.display = 'none';
  }
}
