import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserSearchService } from './user-search/user-search.service';
import { GithubProxyService } from './proxies/github-proxy.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserSearchService, GithubProxyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
