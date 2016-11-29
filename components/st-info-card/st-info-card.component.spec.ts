import {
  TestBed
} from '@angular/core/testing';

import {Http} from '@angular/http';
import {
  TranslateModule, TranslateLoader, TranslateService, TranslateStaticLoader
}
  from 'ng2-translate/ng2-translate';
import {
  RouterTestingModule
} from '@angular/router/testing';
import {StInfoCardComponent} from './st-info-card.component';


describe('StInfoCardComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StInfoCardComponent],
      imports: [TranslateModule.forRoot({
        provide: TranslateLoader,
        useFactory: (http: Http) => new TranslateStaticLoader(http, 'assets/i18n', '.json'),
        deps: [Http]
      }), RouterTestingModule],
      providers: [TranslateService]
    });
  });

  let stInfoCardComponent: StInfoCardComponent;
  let fakeOptions: Array<string> = ['tab 1', 'tab 2', 'tab 3'];

  beforeEach(() => {
    stInfoCardComponent = new StInfoCardComponent();
  });

  it ('Should be able to change the photo to default photo when photo url is broken', () => {
    stInfoCardComponent.photo = 'broken/img/url';
    stInfoCardComponent.onPhotoError();

    expect(stInfoCardComponent.photo).toBe(stInfoCardComponent.defaultPhoto);
  });
});