import { Injectable } from '@angular/core';
import { GithubProxyService } from '../proxies/github-proxy.service';
import { Observable } from 'rxjs/Observable';
import { User, IUser } from '../model/user';

@Injectable()
export class UserSearchService {

  constructor(private proxy:GithubProxyService) { }

  search(username: string): Observable<IUser> {
    return this.proxy.search(username)
    .map(
      (response) => {
        return this.getUser(response.json())
      }
    )
  }

  private getUser(json:any): IUser{
    let user: IUser = new User(
      json.login, json.id, json.name, json.avatar_url
    );
    return user;
  }

}
