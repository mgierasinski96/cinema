import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {SearchMoviesComponent} from './views/searchMovies/search-movies.component';
import {PlayedMoviesComponent} from './views/playedMovies/played-movies.component';
import {ReserveTicketComponent} from './views/reserve-ticket/reserve-ticket.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {ListAppUsersComponent} from './views/list-app-users/list-app-users.component';
import {NotLoggedInComponent} from './views/not-logged-in/not-logged-in.component';
import {AboutComponent} from './views/about/about.component';


// Delkaracja na jakim url ma się wyrenderować jaki komponent. Pojawi się w miejscu deklaracji <router-outlet>
const routes: Routes = [
  {path: 'movies', component: SearchMoviesComponent},
  {path: 'playedMovies', component: PlayedMoviesComponent},
  {path: 'reserveTicket/:seats/:movieIdentificator', component: ReserveTicketComponent, pathMatch: 'full'},
  {path: 'reserveTicket', component: ReserveTicketComponent},
  {path: 'appUsers', component: ListAppUsersComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'notLoggedIn', component: NotLoggedInComponent},
  {path: 'about', component: AboutComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
