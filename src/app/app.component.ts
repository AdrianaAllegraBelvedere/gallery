import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GalleryComponent } from "./componentes/gallery/gallery.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'galeria-imagenes';
}
