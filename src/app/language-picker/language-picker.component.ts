import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Language} from './language';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.css']
})
export class LanguagePickerComponent {

  @Input() languages = Array<Language>();
  @Output() selected = new EventEmitter<string>();

  public hovering = false;

  select(lang: Language) {
    this.selected.emit(lang.id);

    const aux = this.languages.slice();
    let found = false;
    for (let i = 0; i < aux.length && !found; i++) {
      if (aux[i].id === lang.id) {
        aux.splice(i, 1);
        found = true;
      }
    }

    aux.sort((a, b) => {
      return a.id.localeCompare(b.id);
    });

    aux.unshift(lang);

    this.languages = aux.slice();
  }
}
