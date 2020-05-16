import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
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
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {MovieService} from './services/movie.service';
import {SearchMoviesComponent} from './views/searchMovies/searchMovies.component';
import {MyTableComponent} from './components/my-table/my-table.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchMoviesComponent,
    MyTableComponent,
    MovieDetailsComponent
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
    MatDialogModule,
    MatInputModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent] // deklaracja glownego widoku
})
export class AppModule {
}
