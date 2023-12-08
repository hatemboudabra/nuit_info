import { Component } from '@angular/core';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1>{{ translatedText }}</h1>
    </div>
  `
})
export class AppComponentComponent {

  translatedText = '';

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.translateService.getTranslation('greeting.message').subscribe(
      (translation: string) => this.translatedText = translation
    );
  }
}
