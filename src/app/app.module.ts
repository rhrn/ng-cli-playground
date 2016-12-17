import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AuthService } from './auth.service';
import appRoutes from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
  ],
  imports: [
    appRoutes,
    BrowserModule,
    HttpModule
  ],
  providers: [ { provide: 'auth', useClass: AuthService } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
