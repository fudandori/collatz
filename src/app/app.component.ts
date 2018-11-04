import {Component} from '@angular/core';
import {expand, fade, pop, shake} from './animations/animations';

const GO = 'GO!', STOP = 'STOP';
const MILD_SHAKE = 50, AVERAGE_SHAKE = 100, HEAVY_SHAKE = 150;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [expand, shake, pop, fade]
})

export class AppComponent {

  public inputNumber: number;
  public result: number;
  public result2: number;
  public count: number;
  public streak = 0;

  public buttonText = GO;

  public started = false;
  public lockDown = false;
  private switched: boolean;

  public trigger1 = 'show';
  public trigger2 = 'hide';

  public error = 'hide';
  public info = 'hide';
  public popUp = 'hide';

  public shake = '';
  public shaking = false;

  public cursorPos = {x: 0, y: 0};

  public onClick(event: MouseEvent) {

    const button = event.currentTarget as HTMLInputElement;
    button.blur();

    if (Number.isInteger(this.inputNumber) && this.inputNumber > 0) {
      if (!this.started) {
        this.init();
        this.roll();
      } else {
        this.started = false;
        this.lockDown = true;
      }
    } else {
      this.triggerError();
    }
  }

  public menu(event) {
    if (this.popUp === 'hide') {
      this.cursorPos.x = event.x;
      this.cursorPos.y = event.y;
    }
    this.popUp = this.popUp === 'show' ? 'hide' : 'show';
  }

  public showInfo(show: boolean = true) {
    this.info = show ? 'show' : 'hide';
  }

  public triggerError() {
    this.error = 'show';
    setTimeout(() => this.error = 'hide', 2000);
  }

  public onEnd(event) {
    if (this.shaking) {
      switch (event.toState) {
        case 'one':
          this.shake = 'two';
          break;
        case 'two':
          this.shake = 'one';
          break;
        case 'three':
          this.shake = 'four';
          break;
        case 'four':
          this.shake = 'three';
          break;
        case 'five':
          this.shake = 'six';
          break;
        case 'six':
          this.shake = 'five';
          break;
      }
    }
  }

  private roll() {
    this.prepareNext();
    this.next();
    this.updateStatus();
    this.evaluateShaking();
  }

  private prepareNext() {
    this.trigger1 = this.trigger1 === 'show' ? 'hide' : 'show';
    this.trigger2 = this.trigger2 === 'show' ? 'hide' : 'show';

    if (this.switched) {
      this.result2 = this.calc(this.result);
    } else {
      this.result = this.calc(this.result2);
    }
  }

  private next() {
    if (this.result !== 1 && this.result2 !== 1 && this.started) {
      setTimeout(() => this.roll(), 400);
    } else {
      setTimeout(() => {
        this.reset();
      }, 2000);
    }
  }

  private updateStatus() {
    this.count++;
    this.streak = this.count > this.streak ? this.count : this.streak;
    this.switched = !this.switched;
  }

  private reset() {
    this.trigger1 = 'hide';
    this.trigger2 = 'hide';
    this.buttonText = GO;
    this.started = false;
    this.lockDown = false;
    this.shaking = false;
    this.shake = '';
  }

  private init() {
    this.trigger1 = 'show';
    this.trigger2 = 'hide';

    this.switched = true;
    this.started = true;

    this.buttonText = STOP;

    this.result = this.inputNumber;
    this.result2 = this.inputNumber;
    this.count = 0;
  }

  private calc(input: number): number {
    return input % 2 === 0 ? input / 2 : input * 3 + 1;
  }

  private evaluateShaking() {
    switch (this.count) {
      case MILD_SHAKE:
        this.shaking = true;
        this.shake = 'one';
        break;
      case AVERAGE_SHAKE:
        this.shake = 'three';
        break;
      case HEAVY_SHAKE:
        this.shake = 'five';
        break;
    }
  }
}
