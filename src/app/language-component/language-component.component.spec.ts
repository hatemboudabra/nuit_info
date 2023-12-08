import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageComponentComponent } from './language-component.component';

describe('LanguageComponentComponent', () => {
  let component: LanguageComponentComponent;
  let fixture: ComponentFixture<LanguageComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageComponentComponent]
    });
    fixture = TestBed.createComponent(LanguageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
