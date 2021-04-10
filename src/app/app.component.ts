import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {Store} from "@ngrx/store";
import {AppState} from "./app.reducer";

declare const require;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularBaseMain';
  language = '';

  constructor(public translateService: TranslateService, private store: Store<AppState>,) {
  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    // With this we load the default language in the main bundle (cache busting)
    this.translateService.setTranslation('en', require('../assets/i18n/en.json'));

    this.store.select('language').subscribe(state => {
      this.language = state;
      this.translateService.use(this.language);
    });
  }
}
