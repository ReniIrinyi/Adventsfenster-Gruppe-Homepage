import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
  AfterViewInit,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ScreenSizeService } from 'src/app/service/ScreenSizeService';
import { DataService } from 'src/app/service/DataService';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
  animations: [
    trigger('slideLeft', [
      state('closed', style({ transform: 'translateX(0)' })),
      state('opened', style({ transform: 'translateX(-100%)' })),
      transition('closed => opened', animate('0.5s ease')),
      transition('opened => closed', animate('0.5s ease')),
    ]),
  ],
})
export class CalenderComponent implements OnInit, AfterViewInit {
  faStar = faStar;
  numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];
  isSmallScreen = false;
  fullScreenImageIndex: number | null = null;
  imgs: string[] = [];
  currentDate = new Date();
  today = this.currentDate.getDate();
  // allowedDate = new Date(this.currentDate.getFullYear(), 11, 1); // December 1st of the current year
  allowedDates: Date[] = this.numberArray.map(
    (el) => new Date(this.currentDate.getFullYear(), 8, el) //set to september
  );

  constructor(
    private screenSizeService: ScreenSizeService,
    private dataService: DataService
  ) {}

  @ViewChildren('calenderElement') calendarElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.screenSizeService.isSmallScreen$.subscribe((isSmall) => {
      this.isSmallScreen = isSmall;
    });
    this.imgs = this.dataService.getImgs();


  }
  ngAfterViewInit() {
    this.calendarElements.forEach((elementRef, index) => {
      const element = elementRef.nativeElement;
      const allowedDate = this.allowedDates[index];

      element.addEventListener('click', () => {
        if (this.currentDate >= allowedDate) {
          element.classList.toggle('opened');
          element.classList.toggle('closed');
          if (element.classList.contains('opened')) {
            const image = element.querySelector('img');
            if (image) {
              image.addEventListener('click', () => {
                image.classList.toggle('enlarged');
              });
            }
          }
        }
      });
    });
  }
  openFullScreenImage(i: number) {
    this.fullScreenImageIndex = i;
  }

  closeFullScreenImage() {
    this.fullScreenImageIndex = null;
  }
}
