import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

const GO = 'GO!', STOP = 'STOP';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('expand', [
      state('show',
        style({opacity: 1, transform: 'translateY(-200px)'})),
      state('hide',
        style({opacity: 0, transform: 'translateY(0)', visibility: 'hidden'})),
      transition('show <=> hide', animate(250))
    ]),
    trigger('fade', [
      state('show',
        style({visibility: 'visible', opacity: 1})),
      state('hide',
        style({visibility: 'hidden', opacity: 0})),
      transition('show <=> hide', animate(1000))
    ]),
    trigger('pop', [
      state('show',
        style({
          transform: 'translateX(0px)',
          opacity: '1'
        })),
      state('hide',
        style({
          transform: 'translateX(-200px)',
          opacity: '0'
        })),
      transition('show => hide',
        animate(200))
      ,
      transition('hide => show',
        animate(200)
      )
    ])
  ]
})

export class AppComponent {
  protected inputNumber: number;
  protected result: number;
  protected result2: number;
  protected count: number;
  protected state = 'show';
  protected state2 = 'hide';
  private first: boolean;
  protected buttonText = GO;
  protected started = false;
  protected lockDown = false;
  protected streak = 0;
  protected error = 'hide';
  protected info = 'hide';
  protected popUp = 'hide';
  protected cursorPos = {x: 0, y: 0};

  private roll() {


    this.state = this.state === 'show' ? 'hide' : 'show';
    this.state2 = this.state2 === 'show' ? 'hide' : 'show';

    if (this.first) {
      if (this.result % 2 === 0) {
        this.result2 = this.result / 2;
      } else {
        this.result2 = this.result * 3 + 1;
      }

    } else {
      if (this.result2 % 2 === 0) {
        this.result = this.result2 / 2;
      } else {
        this.result = this.result2 * 3 + 1;
      }

    }

    if (this.result !== 1 && this.result2 !== 1 && this.started) {
      setTimeout(() => this.roll(), 400);
    } else {
      setTimeout(() => {
        this.state = 'hide';
        this.state2 = 'hide';
        this.buttonText = GO;
        this.started = false;
        this.lockDown = false;
      }, 2000);
    }

    this.count++;
    this.streak = this.count > this.streak ? this.count : this.streak;
    this.first = !this.first;
  }

  protected onClick(event) {
    event.target.blur();

    if (Number.isInteger(this.inputNumber) && this.inputNumber > 0) {

      if (!this.started) {

        this.state = 'show';
        this.state2 = 'hide';
        this.first = true;

        this.started = true;
        this.buttonText = STOP;
        this.result = this.inputNumber;
        this.result2 = this.inputNumber;
        this.count = 0;

        this.roll();
      } else {
        this.started = false;
        this.lockDown = true;
      }
    } else {
      this.error = 'show';
      setTimeout(() => this.error = 'hide', 2000);
    }
  }

  protected menu(event) {
    if (this.popUp === 'hide') {
      this.cursorPos.x = event.x;
      this.cursorPos.y = event.y;
    }

    this.popUp = this.popUp === 'show' ? 'hide' : 'show';
  }

  protected showInfo(show: boolean = true) {
    this.info = show ? 'show' : 'hide';
  }
}
