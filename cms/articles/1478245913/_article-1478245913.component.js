import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1478245913Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1478245913.html',
  host: {
    '[class.xblog-article-1478245913]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1478245913;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      webAnimationLink: 'https://w3c.github.io/web-animations',
      featWebAnimationLink: 'http://caniuse.com/#feat=web-animation',
      webAnimationPolyfillLink: 'https://github.com/web-animations/web-animations-js',
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'basic-transition', name: 'Basic transition' },
      { id: 'enter-leave-transition', name: 'Enter-Leave transition' },
      { id: 'auto-property-calc', name: 'Automatic property calculation' },
      { id: 'multi-step-animations', name: 'Multi-step animations' },
      { id: 'parallel-animations', name: 'Parallel animations' }
    ])
    .addSubHeadings([
      { headingId: 'basic-transition', id: 'triggers', name: 'Triggers' },
      { headingId: 'basic-transition', id: 'states', name: 'States' },
      { headingId: 'basic-transition', id: 'transitions', name: 'Transitions' },
      { headingId: 'basic-transition', id: 'attach-animations', name: 'Attach animations' },
      { headingId: 'enter-leave-transition', id: 'wildcard-state', name: 'Wildcard state' },
      { headingId: 'enter-leave-transition', id: 'void-state', name: 'Void state' },
    ])
    .build();

    this.basicTransition = {
      sourceCode: {
        name: 'Basic transition',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'basic-transition')
      },
      codeBlocks: {
        1: this.getCodeBlock(getBasicTransition01),
        2: this.getCodeBlock(getBasicTransition02),
        3: this.getCodeBlock(getBasicTransition03),
        4: this.getCodeBlock(getBasicTransition04),
        5: this.getCodeBlock(getBasicTransition05),
        6: this.getCodeBlock(getBasicTransition06),
        7: this.getCodeBlock(getBasicTransition07),
      }
    };

    this.enterLeaveTransition = {
      sourceCode: {
        name: 'Enter-Leave transition',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'enter-leave-transition')
      },
      codeBlocks: {
        1: this.getCodeBlock(getEnterLeaveTransition),
      }
    };

    this.autoPropertyCalc = {
      sourceCode: {
        name: 'Automatic property calculation',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'automatic-property-calculation')
      },
      codeBlocks: {
        1: this.getCodeBlock(getAutoPropertyCalc),
      }
    };

    this.multiStepAnimations = {
      sourceCode: {
        name: 'Multi-step animations',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'multi-step-animations')
      },
      codeBlocks: {
        1: this.getCodeBlock(getMultiStepAnimations),
      }
    };

    this.parallelAnimations = {
      sourceCode: {
        name: 'Parallel animations',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'parallel-animations')
      },
      codeBlocks: {
        1: this.getCodeBlock(getParallelAnimations),
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getBasicTransition01(){
  return `
    import {
      Component,
      trigger,
      state,
      style,
      transition,
      animate
    } from '@angular/core';


    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          // We'll define states & transitions at here
        ])
      ]
    })
    .Class({.....});`;
}

function getBasicTransition02(){
  return `
    import {
      Component,
      trigger,
      state,
      style,
      transition,
      animate
    } from '@angular/core';


    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('false', style({
            color: 'black',
            backgroundColor: 'white',
            transform: 'translateX(0) scale(1)'
          })),
          state('true',   style({
            color: 'white',
            backgroundColor: 'green',
            transform: 'translateX(0) scale(1.5)'
          })),
          // We'll define transitions at here
        ])
      ]
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.isActive = false;
      },

      toggle: function(){
        this.isActive = !this.isActive;
      }
    });`;
}

function getBasicTransition03(){
  return `
    import {
      Component,
      trigger,
      state,
      style,
      transition,
      animate
    } from '@angular/core';


    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          .....
          transition('0 => 1', animate('.5s ease-in')),
          transition('1 => 0', animate('.5s ease-in'))
        ])
      ]
    })
    .Class({.....});`;
}

function getBasicTransition04(){
  return `
    animations: [
      trigger('myState', [
        .....
        transition('0 => 1', '1 => 0', animate('.5s ease-in')),
      ])
    ]`;
}

function getBasicTransition05(){
  return `
    animations: [
      trigger('myState', [
        .....
        transition('0 <=> 1', animate('.5s ease-in')),
      ])
    ]`;
}

function getBasicTransition06(){
  return `
    animations: [
      trigger('myState', [
        transition('0 => 1', [
          style({
            color: 'black',
            backgroundColor: 'white',
            transform: 'translateX(0) scale(1)'
          }),
          animate('80ms ease-in', style({
            color: 'white',
            backgroundColor: 'green',
            transform: 'translateX(0) scale(1.5)'
          }))
        ]),
      ])
    ]`;
}

function getBasicTransition07(){
  return `
    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('false', style({
            color: 'black',
            backgroundColor: 'white',
            transform: 'translateX(0) scale(1)'
          })),
          state('true',   style({
            color: 'white',
            backgroundColor: 'green',
            transform: 'translateX(0) scale(1.5)'
          })),
          transition('0 <=> 1', animate('.5s ease-in'))
        ])
      ]
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.isActive = false;
      },

      toggle: function(){
        this.isActive = !this.isActive;
      },

      animationStarted: function(){
        console.log('animationStarted');
      },

      animationDone: function(){
        console.log('animationDone');
      }
    });

    /*--------------------------------------------------------------------*/

    <button type="button" 
      [@myState]="isActive" 
      (@myState.start)="animationStarted($event)"
      (@myState.done)="animationDone($event)"
      (click)="toggle()"
    >
      Click Me
    </button>`;
}

function getEnterLeaveTransition(){
  return `
    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('true',   style({
            transform: 'translateX(0) scale(1)'
          })),
          transition('void => *', [
            style({ transform: 'translateX(-2000px) scale(1)' }),
            animate('1s')
          ]),
          transition('* => void', [
            animate('1s', style({ transform: 'translateX(2000px) scale(1)' }))
          ])
        ])
      ]
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.messages = [ { text: 'Hello World', isActive: true } ];
      },

      remove: function(){
        this.messages.length = 0;
      }
    });

    /*--------------------------------------------------------------------*/

    <div class="container">
      <div *ngFor="let message of messages" class="message" [@myState]="message.isActive">{{message.text}}</div>
    </div>
    <hr/>
    <button type="button" (click)="remove()">Remove</button>`;
}

function getAutoPropertyCalc(){
  return `
    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('true', style({ height: '*' })),
          transition('* => void', [
            animate('.5s', style({ height: '0' }))
          ])
        ])
      ]
    })
    .Class({.....});`;
}

function getMultiStepAnimations(){
  return `
    import {
      .....
      keyframes
    } from '@angular/core';


    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('true', style({ transform: 'translateX(0)' })),
          transition('void => *', [
            animate('1s', keyframes([
              style({opacity: 0, transform: 'translateX(-2000px)', offset: 0}),
              style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
              style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
            ]))
          ]),
          transition('* => void', [
            animate('1s', keyframes([
              style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
              style({opacity: 1, transform: 'translateX(-15px)', offset: 0.3}),
              style({opacity: 0, transform: 'translateX(2000px)',  offset: 1.0})
            ]))
          ])
        ])
      ]
    })
    .Class({.....});`;
}

function getParallelAnimations(){
  return `
    import {
      .....
      group
    } from '@angular/core';


    export var exampleComponent = Component({
      .....
      animations: [
        trigger('myState', [
          state('true', style({ 
            width: '*', 
            lineHeight: '40px',
            paddingLeft: '20px', 
            paddingRight: '20px', 
            transform: 'translateX(0)', 
            opacity: 1 
          })),
          transition('void => *', [
            style({ 
              width: 0, 
              lineHeight: 0, 
              paddingLeft: 0, 
              paddingRight: 0,
              transform: 'translateX(50px)', 
              opacity: 0 
            }),
            group([
              animate('.5s .3s ease', style({
                width: '*',
                lineHeight: '40px',
                paddingLeft: '20px', 
                paddingRight: '20px', 
                transform: 'translateX(0)'
              })),
              animate('.3s ease', style({
                opacity: 1
              }))
            ])
          ]),
          transition('* => void', [
            group([
              animate('0.5s ease', style({
                width: 0,
                lineHeight: 0, 
                paddingLeft: 0, 
                paddingRight: 0,
                transform: 'translateX(50px)',
              })),
              animate('0.3s 0.3s ease', style({
                opacity: 0
              }))
            ])
          ])
        ])
      ]
    })
    .Class({.....});`;
}