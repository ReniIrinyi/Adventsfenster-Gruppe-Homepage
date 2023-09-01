import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = 'http://localhost:8000/index.php';
  constructor(private http: HttpClient) {}
  submitForm(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
