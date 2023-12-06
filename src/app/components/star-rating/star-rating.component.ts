import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  get filledStars(): number {
    return Math.floor(this.rating);
  }

  hasHalfStar(): boolean {
    return this.rating % 1 !== 0;
  }

  get starsArray(): number[] {
    return Array(Math.ceil(this.rating)).fill(0);
  }
}
