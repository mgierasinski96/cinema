import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {ToastrModule} from 'ngx-toastr';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MovieService} from './services/movie.service';
import {SearchMoviesComponent} from './views/searchMovies/search-movies.component';
import {MyTableComponent} from './components/my-table/my-table.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {RoomService} from './services/room.service';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {PlayedMoviesComponent} from './views/playedMovies/played-movies.component';
import {SeatService} from './services/seat.service';
import { ReserveTicketComponent } from './views/reserve-ticket/reserve-ticket.component';
import {LoginComponent} from './components/login/login.component';
import {AuthService} from './services/auth.service';
import {TokenStorage} from './core/token.storage';
import {Interceptor} from './core/inteceptor';
import {RegisterComponent} from './views/register/register.component';
import {UserService} from './services/user.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ListAppUsersComponent } from './views/list-app-users/list-app-users.component';
import {UserDetailsComponent} from './components/user-details/user-details.component';
import { NotLoggedInComponent } from './views/not-logged-in/not-logged-in.component';
import {AboutComponent} from './views/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    MyTableComponent,
    MovieDetailsComponent,
    PlayedMoviesComponent,
    ReserveTicketComponent,
    LoginComponent,
    RegisterComponent,
    ListAppUsersComponent,
    UserDetailsComponent,
    NotLoggedInComponent,
    AboutComponent
  ],
  entryComponents: [],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
   BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTooltipModule,
    MatTableModule,
    ToastrModule.forRoot(),
    MatFormFieldModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  providers: [MovieService, UserService, RoomService, SeatService, AuthService, TokenStorage, TokenStorage,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    }],
  bootstrap: [AppComponent] // deklaracja glownego widoku
})
export class AppModule {
}
