import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  // private apiUrl = 'http://localhost:8000/index.php';
  private apiUrl = 'https://adventsfenster-bottenwil.com/api/index.php';
  status = false;
  sent = false;
  notSent = false;
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
    const formData = new FormData();
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('message', this.formData.message);

    this.http.post(this.apiUrl, formData).subscribe(
      (response) => {
        console.log(response);
        console.log('Form submission successful');
        this.status = true;
        this.sent = true;
        this.formData = { name: '', email: '', message: '' };
      },
      (error) => {
        console.error('Error submitting form', error);
        console.log('Error status:', error.status);
        console.log('Error body:', error.error); // Log the error response body
        this.status = true;
        this.notSent = true;
      }
    );
  }
}
