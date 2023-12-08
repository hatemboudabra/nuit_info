import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  constructor(private http: HttpClient) { }
  private base="https://localhost:8080/api/change-language";
  changeLanguage(language: string): Observable<any> {
    return this.http.get(`this.base?lang=${language}`);
  }
}
