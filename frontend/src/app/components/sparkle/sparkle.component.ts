import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sparkle',
  templateUrl: './sparkle.component.html',
  styleUrls: ['./sparkle.component.scss'],
})
export class SparkleComponent implements OnInit {
  numberOfStars = 150;
  sparkleCount = new Array(this.numberOfStars);
  stars: number[] = [];

  ngOnInit(): void {
    const maxDelay = 3;

    for (let i = 0; i < this.numberOfStars; i++) {
      const randomDelay = Math.random() * maxDelay;
      this.stars.push(randomDelay);
    }
  }
}
