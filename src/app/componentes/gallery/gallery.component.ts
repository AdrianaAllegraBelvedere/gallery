import { Component, OnInit } from '@angular/core';
import { ImgServicesService } from '../../service/img-services.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalImgComponent } from '../../modales/modal-img/modal-img.component';



@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  images: any[] = [];
  query: string = 'nature'; // Búsqueda predeterminada

  constructor(
    private _imgService: ImgServicesService,
    public dialog: MatDialog,
   ) { }

  ngOnInit(): void {
    this.searchImages();
  }

  searchImages(): void {
    this._imgService.getImages(this.query).subscribe(data => {
      if (Array.isArray(data.results)) {
        this.images = data.results; // Asegúrate de que data.results sea un array
      } else {
        console.error('The API response does not contain an array of results.');
        this.images = [];
      }
    }, error => {
      console.error('Error fetching images', error);
    });
    console.log(this.images)
  }

  abrirModalImagenes(img:any){
    console.log(img)
    this._imgService.setInfoImg(img)
    this.dialog.open(ModalImgComponent, {
      panelClass: 'custom-modal',
      width: '90vw', // Ajusta el ancho
      height: '60vh',// Ajusta la altura
    });
    
  }

}
