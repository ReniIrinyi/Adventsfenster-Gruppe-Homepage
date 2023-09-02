import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  private apiUrl = 'http://localhost:8000/index.php';
  formData: {
    name: string;
    email: string;
    message: string;
  } = {
    name: '',
    email: '',
    message: '',
  };
  constructor(private http: HttpClient) {}

  onSubmit() {
    // Set headers to allow form data
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);

    this.http.post(this.apiUrl, formData).subscribe(
      (response) => {
        console.log('Form submission successful', response);
        console.log(this.formData);
      },
      (error) => {
        console.error('Error submitting form', error);
        console.log(this.formData);
      }
    );
  }
}
