import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any;
  error: string;

  constructor(private http: Http) {}

  search(username: string): void {
    this.user = null;
    this.error = null;
    this.http.get(`https://api.github.com/users/${username}`)
    .subscribe(
      (response) => this.user = response.json(),
      (error) => this.error = error
    );
  }

}
