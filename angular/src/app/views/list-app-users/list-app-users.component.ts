import {Component, OnInit, ViewChild} from '@angular/core';
import {MyTableComponent} from '../../components/my-table/my-table.component';
import {MovieDetailsComponent} from '../../components/movie-details/movie-details.component';
import {UserService} from '../../services/user.service';
import {UserDetailsComponent} from '../../components/user-details/user-details.component';


export interface PeriodicElement {
  id: string;
  title: string;
  showStartsAt: Date;
  ticketPrice: string;
  left: string;
}
@Component({
  selector: 'app-list-app-users',
  templateUrl: './list-app-users.component.html',
  styleUrls: ['./list-app-users.component.scss']
})
export class ListAppUsersComponent implements OnInit {
  @ViewChild('myChild') private myChild: MyTableComponent;
  @ViewChild('myUserDetails') private myUserDetails: UserDetailsComponent;
  tableData;
  username;
  columnHeader = {'username': 'Użytkownik', 'firstName': 'Imię', 'lastName': 'Nazwisko', 'phoneNumber': 'Numer kontaktowy', 'email': 'Email'};
  constructor(private userSerivce: UserService) { }

  ngOnInit(): void {
    this.userSerivce.getAllUsers().subscribe(response => {
      this.tableData = response;
      if (this.tableData !== undefined && this.tableData !== null) {
        this.myChild.init(this.tableData);
      }
    });
  }

  performAction(event) {
    if (event.type !== 'button' && event.nodeName !== 'DIV' && event.nodeName !== 'TH' && event.nodeName !== 'INPUT') {
      this.username = event.parentNode.children[0]?.children[0]?.innerText ||
        event.parentNode.parentNode?.children[0]?.children[0]?.innerText;
      this.myUserDetails.init(this.username);
      document.getElementById('detailsContainer').style.display = 'inline-block';
    }
  }
}
