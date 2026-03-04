import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../services/album'; 
import { Album } from '../../models/album.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album?: Album;
  loading = true;
  error = '';
  newTitle = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (data) => {
        this.album = data;
        this.newTitle = data.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.newTitle };

    this.albumService.updateAlbum(updated).subscribe({
      next: (res) => {
        this.album = res;
      },
      error: () => {
        this.error = 'Failed to update album.';
      }
    });
  }

  back(): void {
    this.router.navigate(['/albums']);
  }
}