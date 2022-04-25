import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchHomeComponent } from './components/search-home/search-home.component';
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
import { GameDetailsComponent } from './components/game-details/game-details.component';
import { HeaderComponent } from './components/utilsComponents/header/header.component';
import { FooterComponent } from './components/utilsComponents/footer/footer.component';
import { GameGenreComponent } from './components/utilsComponents/game-genre/game-genre.component';
import { GameGenrePropComponent } from './components/utilsComponents/game-genre-prop/game-genre-prop.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchHomeComponent,
    GameDetailsComponent,
    HeaderComponent,
    FooterComponent,
    GameGenreComponent,
    GameGenrePropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GaugeModule.forRoot(),
    MatFormFieldModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
