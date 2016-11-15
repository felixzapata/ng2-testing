import { HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubProxyService } from './github-proxy.service';

describe('Service: GithubProxy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubProxyService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([GithubProxyService], (service: GithubProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get info about raguilera82', 
      async(inject([GithubProxyService], (service: GithubProxyService) => {
    const USERNAME: string = 'raguilera82'
    service.search(USERNAME).subscribe(
      (response) => {
        expect(response.json().login).toBe(USERNAME)
      }
    )
  })));

});
