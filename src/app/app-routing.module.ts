import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainMoviesViewComponent } from './pages/main-movies-view/main-movies-view.component';

const routes: Routes = [
  {
    path: '', component: MainMoviesViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
