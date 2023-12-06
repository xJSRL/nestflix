import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() trailerLink: string = '';
  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private readonly domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    const videoId = this.extractVideoId(this.trailerLink);
    this.safeVideoUrl = this.getSafeVideoUrl(videoId);
  }
  
  private getSafeVideoUrl(videoId: string): SafeResourceUrl | null {
    const embedUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${videoId}`);
    return embedUrl;
  }
  
  private extractVideoId(url: string): string {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:[^\/]+\d+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/(?:[^\/]+\d+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=))([^"'&?\/\s]{11})/);
    return match ? match[1] : '';
  }
}
