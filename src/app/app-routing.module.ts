import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMoviesViewComponent } from './pages/main-movies-view/main-movies-view.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';

const routes: Routes = [
  {
    path: '', component: MainMoviesViewComponent
  },
  {
    path: 'details/:id', component: MovieDetailsComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
