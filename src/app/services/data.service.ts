import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { MovieData } from './global-data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getMovies(): Observable<MovieData[]> {
    const movies: MovieData[] = [
      {
        id: 1,
        title: "Tenet",
        description: "Armed with only one word, Tenet, and fighting for the survival of the entire world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
        rating: 7.8,
        duration: '2h 30min',
        genre: 'Action, Sci-Fi',
        releasedDate: new Date('2020-09-03'),
        trailerLink: 'https://www.youtube.com/watch?v=LdOM0x0XDMo',
        imgCoverLink: '../../assets/images/movie-cover/Tenet.png'
      }, 
      {
        id: 2,
        title: "Spider-Man: Into the Spider-Verse",
        description: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        rating: 8.4,
        duration: '1hr 57min',
        genre: 'Action, Animation, Adventure',
        releasedDate: new Date('2018-12-14'),
        trailerLink: 'https://www.youtube.com/watch?v=tg52up16eq0',
        imgCoverLink: '../../assets/images/movie-cover/Spider Man.png'
      }, 
      {
        id: 3,
        title: "Knives Out",
        description: "A detective investigates the death of a patriarch of an eccentric, combative family",
        rating: 7.9,
        duration: '2h 10min',
        genre: 'Comedy, Crime, Drama',
        releasedDate: new Date('2019-11-27'),
        trailerLink: 'https://www.youtube.com/watch?v=qGqiHJTsRkQ',
        imgCoverLink: '../../assets/images/movie-cover/Knives Out.png'
      }, 
      {
        id: 4,
        title: "Guardians of the Galaxy",
        description: "A group of intergalactic criminals must pull together to stop a fanatical warrior with plans to purge the universe.",
        rating: 8.0,
        duration: '2h 1min',
        genre: 'Action, Adventure, Comedy',
        releasedDate: new Date('2014-08-01'),
        trailerLink: 'https://www.youtube.com/watch?v=d96cjJhvlMA',
        imgCoverLink: '../../assets/images/movie-cover/Guardians of The Galaxy.png'
      }, 
      {
        id: 5,
        title: "Avengers: Age of Ultron",
        description: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's mightiest heroes to stop the villainous Ultron from enacting his terrible plan.",
        rating: 7.3,
        duration: '2h 21min',
        genre: 'Action, Adventure, Sci-Fi',
        releasedDate: new Date('2015-05-01'),
        trailerLink: 'https://www.youtube.com/watch?v=tmeOjFno6Do',
        imgCoverLink: '../../assets/images/movie-cover/Avengers.png'
      }, 
    ]

    return of(movies);
  }

  getMovieById(id: number): Observable<MovieData[]> {
    return this.getMovies().pipe(
      map((movies) => movies.filter((movie) => movie.id === id))
    );
  }

  addToWatchlist(id: number) {
    const currentWatchlistString = localStorage.getItem("watchlist");
    let currentWatchlist: number[] = [];
  
    if (currentWatchlistString) {
      try {
        currentWatchlist = JSON.parse(currentWatchlistString);
        if (!Array.isArray(currentWatchlist)) {
          currentWatchlist = [];
        }
      } catch (error) {
        currentWatchlist = [];
      }
    }
    // check if id already exists in the localstorage
    if (!currentWatchlist.includes(id)) {
      currentWatchlist.push(id);
      localStorage.setItem("watchlist", JSON.stringify(currentWatchlist));
    }
  }
  
  removeFromWatchlist(id: number) {
    const currentWatchlistString = localStorage.getItem("watchlist");
    let currentWatchlist: number[] = [];
  
    if (currentWatchlistString) {
      try {
        currentWatchlist = JSON.parse(currentWatchlistString);
        if (!Array.isArray(currentWatchlist)) {
          currentWatchlist = [];
        }
      } catch (error) {
        currentWatchlist = [];
      }
    }
    const indexToRemove = currentWatchlist.indexOf(id);
    if (indexToRemove !== -1) {
      currentWatchlist.splice(indexToRemove, 1);
    }
    localStorage.setItem("watchlist", JSON.stringify(currentWatchlist));
  }

}
