import { Component } from '@angular/core';
import { LanguageServiceService } from './language-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nuitInfofront';
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
