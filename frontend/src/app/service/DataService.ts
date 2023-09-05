import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject } from 'rxjs';
import { AppData } from '../../model/AppData';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new ReplaySubject<AppData>(1);
  private projectUrl = './assets/imgs.json';
  imgs: string[] = [];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<AppData>(this.projectUrl).subscribe((data) => {
      for (const imgKey in data.Images) {
        if (data.Images.hasOwnProperty(imgKey)) {
          const imgPath = data.Images[imgKey];
          this.imgs.push(imgPath.toString());
        }
      }
      // Emit the fetched data
      this.dataSubject.next(data);
    });
  }
  getImgs() {
    return this.imgs;
  }
}
