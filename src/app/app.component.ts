import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Adventsfenster-Gruppe-Homepage';
  snows = 25;
  snowArray = new Array(this.snows);
}
