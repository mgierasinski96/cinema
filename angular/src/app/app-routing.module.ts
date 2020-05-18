import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {SearchMoviesComponent} from './views/searchMovies/search-movies.component';
import {PlayedMoviesComponent} from './views/playedMovies/played-movies.component';
import {ReserveTicketComponent} from './views/reserve-ticket/reserve-ticket.component';


// Delkaracja na jakim url ma się wyrenderować jaki komponent. Pojawi się w miejscu deklaracji <router-outlet>
const routes: Routes = [
  {path: 'movies', component: SearchMoviesComponent},
  {path: 'playedMovies', component: PlayedMoviesComponent},
  {path: 'reserveTicket/:seats/:movieIdentificator', component: ReserveTicketComponent, pathMatch: 'full'},
  {path: 'reserveTicket', component: ReserveTicketComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
