import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgServicesService {
  infoImg:any;
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = '0vAMLatg_9eLwMYmyaDhWKTJrR659hAYJWrZG_TJZF8'; // Reemplaza con tu clave de acceso de Unsplash

  constructor(private http: HttpClient) { }

  getImages(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessKey}`
    });

    // Usa HttpParams para agregar parámetros a la solicitud
    const params = new HttpParams()
      .set('query', query)
      .set('per_page', '12');

    return this.http.get<any>(this.apiUrl, { headers, params });
  }

  setInfoImg(img:any){
    this.infoImg = img
  }
  getInfoImg(){
    return this.infoImg
  }

}



