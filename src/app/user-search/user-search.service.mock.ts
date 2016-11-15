import { Observable } from 'rxjs/Observable';
import { User, IUser } from '../model/user';

export class UserSearchServiceMock {

  constructor() { }

  search(username: string): Observable<IUser> {
    let result: Observable<IUser>
    if (username === 'raguilera82') {
      result = Observable.of(
      new User('raguilera82', '121212', 
      'Rubén Aguilera', 
      'https://avatars.githubusercontent.com/u/818068?v=3')
    )
    }else{
      result = Observable.throw('Error!')
    }
    return result  
  }

}
