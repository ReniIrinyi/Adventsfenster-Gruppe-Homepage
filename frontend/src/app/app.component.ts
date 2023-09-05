import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Adventsfenster-Gruppe-Homepage';
  snows = 25;
  stars = 20;
  snowArray = new Array(this.snows);
  starArray = new Array(this.stars);
}
