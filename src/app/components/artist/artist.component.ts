import { Component } from '@angular/core';
import {SpotifyService } from '../../services/spotify.service';
import {Artist} from '../../Artist';
import {Albums} from '../../albums';
import {ActivatedRoute, Router }  from '@angular/router';

@Component({
  moduleId:module.id,
  selector: 'artist',
  templateUrl: 'artist.component.html',
  providers:[SpotifyService]
})
export class ArtistComponent  {
        id:string;
        artist:Artist[];
        albums:Albums[];

        constructor(private _spotifyService:SpotifyService, private _route: ActivatedRoute, private _router: Router){


        }


        ngOnInit(){
            this._route.params
                .map( params=> params['id'])
                .subscribe((id) => {
                    this._spotifyService.getArtist(id)
                        .subscribe(artist =>{
                            this.artist = artist;
                        });
                      this._spotifyService.getAlbums(id)
                        .subscribe(albums =>{
                            this.albums = albums.items;
                        })
                })
        }
}
