import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
 constructor() { }
 private translations: { [key: string]: string } = {
  'greeting.message': 'Hello, World!'
  // Add more translations as needed
};

getTranslation(key: string): Observable<string> {
  const translation = this.translations[key] || key; // Fallback to the key if translation is not found
  return of(translation);
}
}
