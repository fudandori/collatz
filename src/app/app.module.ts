import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ClarityModule} from '@clr/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatorModule} from 'angular-translator';
import { LanguagePickerComponent } from './language-picker/language-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagePickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ClarityModule,
    BrowserAnimationsModule,
    TranslatorModule.forRoot({
      detectLanguage: true,
      providedLanguages: ['en', 'es', 'pt', 'de', 'fr']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
