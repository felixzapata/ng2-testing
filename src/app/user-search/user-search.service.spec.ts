/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserSearchService } from './user-search.service';
import { GithubProxyService } from '../proxies/github-proxy.service';
import { HttpModule } from '@angular/http';

describe('Service: UserSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserSearchService, GithubProxyService],
      imports: [HttpModule]
    });
  });

  it('should get username raguilera82', async(inject([UserSearchService], (service: UserSearchService) => {
    const USERNAME: string = 'raguilera82';

    service.search(USERNAME).subscribe(
      (user) => {
        expect(user.login).toBe(USERNAME);
      }
    )

  })));
});
