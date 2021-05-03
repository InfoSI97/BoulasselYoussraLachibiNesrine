import { Offre } from '../model/offre.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class OffreService {

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getAllOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>('api/offres');
  }

  createOffre(offre: Offre): Observable<Offre> {
    return this.http.post<Offre>('api/offres', offre);
  }

  deleteOffre(offreId: string): Observable<any> {
    return this.http.delete('api/offres/' + offreId);
  }

  updateOffre(offreId: string | number, changes: Partial<Offre>): Observable<any> {
    return this.http.put('api/offres/' + offreId, changes);
  }
}