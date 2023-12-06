import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { MovieData } from 'src/app/services/global-data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie!: MovieData[];
  showTrailer: boolean = false;
  constructor(
    private _dataService: DataService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
      this.getMovieData();
  }

  getMovieData() {
    this.route.params.subscribe(params => {
      const movieId = +params['id'];
      this._dataService.getMovieById(movieId).subscribe(
        (result) => {
          this.movie = result
          console.log(this.movie)
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }
}
