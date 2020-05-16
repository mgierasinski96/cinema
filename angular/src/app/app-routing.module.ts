import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {SearchMoviesComponent} from './views/searchMovies/searchMovies.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';


// Delkaracja na jakim url ma się wyrenderować jaki komponent. Pojawi się w miejscu deklaracji <router-outlet>
const routes: Routes = [
  {path: 'movies', component: SearchMoviesComponent},
  {path: 'movieDetails', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
