// fade.animation.ts
import {trigger,state, animate, style, group, animateChild, query, stagger, transition} from '@angular/animations';

    export const routerTransition = trigger('routerTransition', [
        transition('* <=> *', [
          query('#About, #Portfolio, #Skills, #Home', style({ position: 'fixed', width:'100%' })
            , { optional: true }),
          query('.block', style({ opacity: 0 })
            , { optional: true }),
       
          query('#About .block, #Portfolio .block, #Skills .block, .block', stagger(180, [
            style({ transform: 'translateX(100px)' }),
            animate('.9s ease-in-out', style({ transform: 'translateX(0px)', opacity: 1 })),
          ]), { optional: true }),
        ])
      ]);