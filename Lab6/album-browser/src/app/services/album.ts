import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Album } from '../models/album.model';
import { Photo } from '../models/photo.model';

@Injectable({ providedIn: 'root' })
export class AlbumService {
  private albums: Album[] = [
    { userId: 1, id: 1, title: 'First album' },
    { userId: 1, id: 2, title: 'Second album' },
    { userId: 2, id: 3, title: 'Vacation' }
  ];

  private photos: Photo[] = [
    {
      albumId: 1,
      id: 1,
      title: 'Photo 1',
      url: 'https://image.fonwall.ru/o/to/peyto-lake-banff-national-park-alberta-rrow.jpg',
      thumbnailUrl: 'https://img.goodfon.ru/wallpaper/big/3/3b/nebo-gory-ozero-cvety-peyzazh.webp'
    },
    {
      albumId: 1,
      id: 2,
      title: 'Photo 2',
      url: 'https://img.goodfon.ru/wallpaper/big/5/18/italiia-gory-ozero-peizazh-otrazhenie-priroda.webp',
      thumbnailUrl: 'https://img.wallpapic.com/i8190-445-829/thumb/nacionalnyj-park-kanady-joho-priroda-gory-otrazhenie-oboi.jpg'
    },
    {
      albumId: 2,
      id: 3,
      title: 'Photo 3',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAtBAT3YfffBSmtwBT0FMqx-zTDHaJ25NqtQ&s',
      thumbnailUrl: 'https://zastavok.net/main/priroda/1481497825.jpg'
    }
  ];

  getAlbums(): Observable<Album[]> {
    return of(this.albums);
  }

  getAlbum(id: number): Observable<Album> {
    const album = this.albums.find(a => a.id === id)!;
    return of(album);
  }

  // ✅ ВОТ ЭТОГО МЕТОДА НЕ ХВАТАЛО
  getAlbumPhotos(id: number): Observable<Photo[]> {
    return of(this.photos.filter(p => p.albumId === id));
  }

  deleteAlbum(id: number): Observable<void> {
    this.albums = this.albums.filter(a => a.id !== id);
    return of(void 0);
  }

  updateAlbum(album: Album): Observable<Album> {
    const i = this.albums.findIndex(a => a.id === album.id);
    if (i !== -1) this.albums[i] = album;
    return of(album);
  }
}