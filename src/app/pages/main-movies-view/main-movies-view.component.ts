import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/services/global-data';

@Component({
  selector: 'app-main-movies-view',
  templateUrl: './main-movies-view.component.html',
  styleUrls: ['./main-movies-view.component.scss']
})
export class MainMoviesViewComponent implements OnInit {
  ascending: boolean = true;
  filteredMovies!: MovieData[];

  constructor(
    private _dataService: DataService) {
  }
  movies: MovieData[] = [];

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this._dataService.getMovies().subscribe(
      (result) => {
        console.log(result);
        this.movies = result;
      }
    )
  }

  sortByDate() {
    this.movies.sort((a, b) => {
      return this.ascending
        ? new Date(b.releasedDate).getTime() - new Date(a.releasedDate).getTime()
        : new Date(a.releasedDate).getTime() - new Date(b.releasedDate).getTime();
    });
    console.log(this.movies);
  }

  sortByTitle() {
    this.movies.sort((a, b) => {
      const titleA = a.title.toLowerCase();
      const titleB = b.title.toLowerCase();

      return this.ascending ? titleA.localeCompare(titleB) : titleB.localeCompare(titleA);
    });
  }

  toggleSortOrder() {
    this.clearSearch();
    this.ascending = !this.ascending;
  }

  onSearch(searchValue: string) {
    console.log(searchValue);
    this.filteredMovies = this.movies.filter(
      movie =>
        movie.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchValue.toLowerCase())
    );
    console.log(this.filteredMovies);
  }
  
  clearSearch() {
    this.filteredMovies = this.movies;
  }
}
