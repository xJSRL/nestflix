import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/services/global-data';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: MovieData[];
  showTrailer: boolean = false;
  movieId!: number;

  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.getMovieId();
    this.getMovieData();
  }

  getMovieId(){
    this.route.params.subscribe(params => {
      this.movieId = +params['id'];
    });
  }

  getMovieData() {
    this._dataService.getMovieById(this.movieId).subscribe(
      (result) => {
        this.movie = result
        console.log(this.movie)
      },
      (error) => {
        console.error(error);
      }
    );
  }

  addToWatchlist(){
    this._dataService.addToWatchlist(this.movieId);
    this.simpleAlert('success', 'success',"Added to watchlist")
    console.log(localStorage['watchlist'])
  }

  removeFromWatchlist(){
    this._dataService.removeFromWatchlist(this.movieId);
    this.simpleAlert('success', 'success',"Removed from watchlist")
    console.log(localStorage['watchlist'])
  }

  simpleAlert(
    icon: any,
    title: string,
    text: string,
  ) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      confirmButtonColor: '#3085d6',
    })
  }

}
