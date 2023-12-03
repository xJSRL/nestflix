import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/services/global-data';

@Component({
  selector: 'app-main-movies-view',
  templateUrl: './main-movies-view.component.html',
  styleUrls: ['./main-movies-view.component.scss']
})
export class MainMoviesViewComponent implements OnInit {

  constructor(
    private _dataService: DataService) {
  }
  movies: MovieData[] = [];
  
  ngOnInit(): void {
      this.getMovies()
  }
  
  getMovies(){
    this._dataService.getMovies().subscribe(
      (result)=>{
        console.log(result);
        this.movies = result;
      }
    )
  }
}
