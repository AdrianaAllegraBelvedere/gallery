import { Component, OnInit } from '@angular/core';
import { ImgServicesService } from '../../service/img-services.service';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-modal-img',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './modal-img.component.html',
  styleUrl: './modal-img.component.scss',
  providers: [DatePipe]
})
export class ModalImgComponent implements OnInit{
  image:any;
  formattedDate: any;

  constructor(
    private _imgService: ImgServicesService,
    private datePipe: DatePipe,
  ){
    
  }
  ngOnInit(): void {
    this.image = this._imgService.getInfoImg()
    console.log('modal: ', this.image)
    const date = this.image.created_at
    /* '2016-06-05T17:07:21Z'; // La fecha en formato ISO 8601 */
    this.formattedDate = this.formatDate(date);
    console.log(this.formattedDate)
  }
  formatDate(dateString: string): string {
    // Validar la fecha proporcionada
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error('Fecha inválida:', dateString);
      return 'Fecha inválida';
    }
    // Formatear la fecha
    const formatted = this.datePipe.transform(date, 'MM/yyyy');
    return formatted ? formatted : 'Fecha no disponible';
  }
}
