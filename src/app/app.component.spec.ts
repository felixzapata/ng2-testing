import { GithubProxyService } from './proxies/github-proxy.service';
import { UserSearchService } from './user-search/user-search.service';
/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { DebugElement } from '@angular/core';
import { UserSearchServiceMock } from './user-search/user-search.service.mock';

describe('App: Testing', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app;
  const USERNAME: string = 'raguilera82';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [],
      providers: [
        {provide: UserSearchService, useClass: UserSearchServiceMock}]
    });

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  });

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it('should render username label', async(() => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Search User');
  }));

  it ('should show username info', async(() => {
    app.search(USERNAME);
    expect(app.user.login).toBe(USERNAME);
  }));

  it ('should show error', async(() => {
    app.search(USERNAME + 'error');
    expect(app.error).toBe('Error!');
  }));

});
