import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from 'src/app/service/ScreenSizeService';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  endDate: Date = new Date('2023-12-01T00:00:00'); // December 1, 2023

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  isSmallScreen = false;

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.isSmallScreen$.subscribe((isSmall) => {
      this.isSmallScreen = isSmall;
    });
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown() {
    const now = new Date();
    const timeDifference = this.endDate.getTime() - now.getTime();

    this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    this.hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    this.minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  }
}
