import { environment } from './../../environments/environment';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubProxyService {

  constructor(private http:Http) { }

  search(username: string): Observable<Response> {
    return this.http.get(environment.url + '/' + username);
  }

}
