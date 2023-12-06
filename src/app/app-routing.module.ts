import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMoviesViewComponent } from './pages/main-movies-view/main-movies-view.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';

const routes: Routes = [
  {
    path: '', component: MainMoviesViewComponent
  },
  {
    path: 'details/:id', component: MovieDetailsComponent
  },
  {
    path: 'watchlist', component: WatchlistComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
