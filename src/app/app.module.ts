import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from '../app/app.routes';
import { AppComponent }  from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {SearchComponent} from './components/search/search.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {SpotifyService} from './services/spotify.service';
import {HttpModule} from '@angular/http';
import {ArtistComponent} from './components/artist/artist.component';
@NgModule({
  imports:      [ BrowserModule,  routing,FormsModule,HttpModule],
  declarations: [ AppComponent,NavbarComponent ,ArtistComponent,AboutComponent,SearchComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
