import { UserSearchService } from './user-search/user-search.service';
import { Component } from '@angular/core';
import { IUser } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: IUser;

  error: string;

  constructor(private service: UserSearchService) {}

  search(username: string): void {
    this.service.search(username)
    .subscribe(
      (user) => {
        console.log(user);
        this.user = user;
      },
      (error) => {
        console.log(error);
        this.error = error;
      }
    );
  }

}
