import { Http } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: any

  constructor(private http:Http){}
  
  search(username: string): void {
    this.http.get(`https://api.github.com/users/${username}`)
    .subscribe(
      (response) => this.user = response.json(),
      (error) => console.log(error)
    )
  }

}
