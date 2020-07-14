import {Component} from '@angular/core';



export interface PeriodicElement {
  id: string;
  title: string;
  showStartsAt: Date;
  ticketPrice: string;
  left: string;
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent  {
  }

