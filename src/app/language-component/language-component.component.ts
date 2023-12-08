import { Component } from '@angular/core';
import { LanguageServiceService } from '../language-service.service';

@Component({
  selector: 'app-language',
  template: `
    <select [(ngModel)]="selectedLanguage" value="selectedLanguage" (change)="changeLanguage()">
      <option value="en">English</option>
      <option value="fr">French</option>
    </select>
  `
})
export class LanguageComponentComponent {
 selectedLanguage = 'en';

  constructor(private languageService: LanguageServiceService) { }

  changeLanguage() {
    this.languageService.changeLanguage(this.selectedLanguage).subscribe(response => {
      // Handle success
      console.log(response);
    }, error => {
      // Handle error
      console.error(error);
    });
  }
}
