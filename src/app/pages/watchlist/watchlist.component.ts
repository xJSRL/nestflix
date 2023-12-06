import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/services/global-data';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss']
})
export class WatchlistComponent implements OnInit {
  watchlistMovies: MovieData[] = [];

  constructor(private _dataService: DataService){}

  ngOnInit(): void {
    const watchlistIds = this.getWatchlist();
    
    if (watchlistIds.length > 0) {
      this.getWatchlistMovies(watchlistIds);
    }
  }

  getWatchlist(): number[] {
    // get items from localstorage
    const watchlistString = localStorage.getItem('watchlist');
    return watchlistString ? JSON.parse(watchlistString) : [];
  }

  getWatchlistMovies(watchlistIds: number[]): void {
    // push movieid info to wathclistmovies
    watchlistIds.forEach(id => {
      this._dataService.getMovieById(id).subscribe(
        (movie) => {
          this.watchlistMovies.push(movie[0]);
          console.log(this.watchlistMovies)
        },
        (error) => {
          console.error(`Error fetching movie with ID ${id}`, error);
        }
      );
    });
  }
}
