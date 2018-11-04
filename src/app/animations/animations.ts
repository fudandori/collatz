import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export const expand = trigger('expand', [
  state('show',
    style({opacity: 1, transform: 'translateY(-200px)'})),
  state('hide',
    style({opacity: 0, transform: 'translateY(0)', visibility: 'hidden'})),
  transition('show <=> hide', animate(250))
]);

export const fade = trigger('fade', [
  state('show',
    style({visibility: 'visible', opacity: 1})),
  state('hide',
    style({visibility: 'hidden', opacity: 0})),
  transition('show <=> hide', animate(1000))
]);

export const pop = trigger('pop', [
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
]);

export const shake = trigger('shake', [
  state('one', style({})),
  state('two', style({})),
  state('three', style({})),
  state('four', style({})),
  state('five', style({})),
  state('six', style({})),
  transition('one <=> two', animate('1s', keyframes([
    style({transform: 'translate(1px, 1px) rotate(0deg)', offset: 0}),
    style({transform: 'translate(-1px, -2px) rotate(-1deg)', offset: 0.1}),
    style({transform: 'translate(-3px, 0px) rotate(1deg)', offset: 0.2}),
    style({transform: 'translate(3px, 2px) rotate(0deg)', offset: 0.3}),
    style({transform: 'translate(1px, -1px) rotate(1deg)', offset: 0.4}),
    style({transform: 'translate(-1px, 2px) rotate(-1deg)', offset: 0.5}),
    style({transform: 'translate(-3px, 1px) rotate(0deg)', offset: 0.6}),
    style({transform: 'translate(3px, 1px) rotate(-1deg)', offset: 0.7}),
    style({transform: 'translate(-1px, 1px) rotate(1deg)', offset: 0.8}),
    style({transform: 'translate(1px, -1px) rotate(0deg)', offset: 0.9}),
    style({transform: 'translate(1px, 2px) rotate(-1deg)', offset: 1})
  ]))),
  transition('three <=> four', animate('.5s', keyframes([
    style({transform: 'translate(2px, 2px) rotate(0deg)', offset: 0}),
    style({transform: 'translate(-2px, -4px) rotate(-2deg)', offset: 0.1}),
    style({transform: 'translate(-6px, 0px) rotate(2deg)', offset: 0.2}),
    style({transform: 'translate(6px, 4px) rotate(0deg)', offset: 0.3}),
    style({transform: 'translate(2px, -2px) rotate(2deg)', offset: 0.4}),
    style({transform: 'translate(-2px, 4px) rotate(-2deg)', offset: 0.5}),
    style({transform: 'translate(-6px, 2px) rotate(0deg)', offset: 0.6}),
    style({transform: 'translate(6px, 2px) rotate(-2deg)', offset: 0.7}),
    style({transform: 'translate(-2px, 2px) rotate(2deg)', offset: 0.8}),
    style({transform: 'translate(2px, -2px) rotate(0deg)', offset: 0.9}),
    style({transform: 'translate(2px, 4px) rotate(-2deg)', offset: 1})
  ]))),
  transition('five <=> six', animate('.3s', keyframes([
    style({transform: 'translate(3px, 3px) rotate(0deg)', offset: 0}),
    style({transform: 'translate(-3px, -6px) rotate(-3deg)', offset: 0.1}),
    style({transform: 'translate(-9px, 0px) rotate(3deg)', offset: 0.2}),
    style({transform: 'translate(9px, 6px) rotate(0deg)', offset: 0.3}),
    style({transform: 'translate(3px, -3px) rotate(deg)', offset: 0.4}),
    style({transform: 'translate(-3px, 6px) rotate(-3deg)', offset: 0.5}),
    style({transform: 'translate(-9px, 3px) rotate(0deg)', offset: 0.6}),
    style({transform: 'translate(9px, 3px) rotate(-3deg)', offset: 0.7}),
    style({transform: 'translate(-3px, 3px) rotate(3deg)', offset: 0.8}),
    style({transform: 'translate(3px, -3px) rotate(0deg)', offset: 0.9}),
    style({transform: 'translate(3px, 6px) rotate(-3deg)', offset: 1})
  ])))
]);


