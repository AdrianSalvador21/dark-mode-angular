import { Component, OnInit } from '@angular/core';
import {validLanguages, SetLanguageAction} from "../../../../core/actions/languaje.actions";
import {Store} from "@ngrx/store";
import {AppState} from "../../../../app.reducer";
import {ThemeService} from "../../../theme/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public language: validLanguages = 'en';

  constructor(public store: Store<AppState>, private themeService: ThemeService) { }

  ngOnInit() {
  }

  changeLanguage(len) {
    this.language = len;
    const accion = new SetLanguageAction( this.language );
    this.store.dispatch( accion );
  }

  toggle() {
    const active = this.themeService.getActiveTheme() ;
    if (active.name === 'light') {
      localStorage.setItem('selectedTheme', 'dark');
      this.themeService.setTheme('dark');
    } else {
      localStorage.setItem('selectedTheme', 'light');
      this.themeService.setTheme('light');
    }
  }

}
