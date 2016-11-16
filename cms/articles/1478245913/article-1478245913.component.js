import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1478245913Component = Component({
  selector: 'article',
  template: "<p>Angular's animation system lets you build animations that run with the same kind of native performance found in pure CSS animations.</p><p>You can also tightly integrate your animation logic with the rest of your application code, for ease of control.</p><br><xblog-section><p>Angular animations are built on top of the standard <a [href]=\"references.webAnimationLink\" rel=\"nofollow\">Web Animations API</a> and run natively on <a [href]=\"references.featWebAnimationLink\" rel=\"nofollow\">browsers that support it</a>.</p><br><p>For other browsers, a polyfill is required. Grab <a [href]=\"references.webAnimationPolyfillLink\" rel=\"nofollow\"><span xblog-highlight>web-animations.min.js</span> from GitHub</a> and add it to your page.</p></xblog-section><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"basic-transition\" class=\"section-heading\">Basic transition</h2><p>Now we'll show you step by step how to build a simple animation that transitions an element between two states driven by a model attribute.</p><br><p>In general, we'll do these steps:</p><br><p>- Define an animation trigger.</p><p>- Define states.</p><p>- Define transition.</p><p>- Attach the animation to element in the component's template.</p><br><h3 id=\"triggers\" class=\"section-subheading\">Triggers</h3><p>First, we define an animation trigger called <span xblog-highlight>myState</span> in the component metadata. It uses animations to transition between two states which we'll define in next step.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><h3 id=\"states\" class=\"section-subheading\">States</h3><p>An animation state is a string value that you define in your application code. The source of the state can be a simple object attribute or it can be a value computed in a method.</p><br><p>These state definitions specify the end styles of each state. They are applied to the element once it has transitioned to that state, and stay as long as it remains in that state.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>In our example, base on the value of <span xblog-highlight>isActive</span> we define two states <span xblog-highlight>true</span> and <span xblog-highlight>false</span>.</p><br><h3 id=\"transitions\" class=\"section-subheading\">Transitions</h3><p>After you define states, you can define transitions between the states. Each transition controls the timing of switching between one set of styles and the next.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><p>If several transitions have the same timing configuration, you can combine them into the same transition definition.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[4]\"></xblog-code></xblog-code-panel><br><br><p>When both directions of a transition have the same timing, as in the previous example, you can use the shorthand syntax <span xblog-highlight>&lt;=&gt;</span>.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[5]\"></xblog-code></xblog-code-panel><br><br><p>You can also apply a style during an animation but not keep it around after the animation finishes. You can define such styles inline, in the transition like this.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"basicTransition.codeBlocks[6]\"></xblog-code></xblog-code-panel><br><br><p>Note at here, the style we declared before <span xblog-highlight>animate()</span> will apply to the left state, in this case, it's <span xblog-highlight>isActive = false</span>.</p><p>The style we declared as second argument for <span xblog-highlight>animate()</span> will apply to the right state, in this case, it's <span xblog-highlight>isActive = true</span>.</p><p>When the transition finishes, none of these styles are kept because they're not defined in a state.</p><br><h3 id=\"attach-animations\" class=\"section-subheading\">Attach animations</h3><p>After defined trigger, states, transitions, our animation is ready to be attached to elements in the component's template by using the <span xblog-highlight>[@triggerName]</span> syntax.</p><br><xblog-code-panel><xblog-title>{{basicTransition.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"basicTransition.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"basicTransition.codeBlocks[7]\"></xblog-code></xblog-code-panel><br><br><p>As you can see, in above example, we also hook callbacks by using <span xblog-highlight>(@myState.start)</span> and <span xblog-highlight>(@myState.done)</span>.</p><p>A callback is fired when an animation is started and also when it is done. It receive an <span xblog-highlight>AnimationTransitionEvent</span> which contains useful properties such as <span xblog-highlight>fromState</span>, <span xblog-highlight>toState</span> and <span xblog-highlight>totalTime</span>.</p><br><h2 id=\"enter-leave-transition\" class=\"section-heading\">Enter-Leave transition</h2><p>In this subject, we'll show you about two special states <span xblog-highlight>wildcard state</span> and <span xblog-highlight>void state</span>.</p><br><h3 id=\"wildcard-state\" class=\"section-subheading\">Wildcard state</h3><p>The * (\"wildcard\") state matches any animation state. This is useful for defining styles and transitions that apply regardless of which state the animation is in. For example:</p><br><p>- The <span xblog-highlight>1 => *</span> transition applies when the element's state changes from <span xblog-highlight>true</span> to anything else.</p><p>- The <span xblog-highlight>* => *</span> transition applies when any change between two states takes place.</p><br><h3 id=\"void-state\" class=\"section-subheading\">Void state</h3><p>The void state can apply to any animation. It applies when the element is not attached to a view, perhaps because it has not yet been added or because it has been removed.</p><br><p>We'll rewrite a litte bit our above example to show you how to define enter and leave animations by using void states.</p><br><xblog-code-panel><xblog-title>{{enterLeaveTransition.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"enterLeaveTransition.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"enterLeaveTransition.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Well, if you run the example, you'll see the element enters from the left after first load and leaves to the right when you remove it by clicking the button.</p><br><h2 id=\"auto-property-calc\" class=\"section-heading\">Automatic property calculation</h2><p>Sometimes you don't know the value of a dimensional style property until runtime. For example, elements often have widths and heights that depend on their content and the screen size.</p><br><p>In these cases, you can use a special <span xblog-highlight>*</span> property value so that the value of the property is computed at runtime and then plugged into the animation.</p><br><xblog-code-panel><xblog-title>{{autoPropertyCalc.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"autoPropertyCalc.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"autoPropertyCalc.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>In above example, the leave animation takes whatever height the element has before it leaves and animates from that height to zero.</p><br><h2 id=\"multi-step-animations\" class=\"section-heading\">Multi-step animations</h2><p>In order to define multi-step animations we use <span xblog-highlight>keyframes</span> You can understand simply that multi-step animations mean to apply sequentially animations when transitioning between two states.</p><br><p>For each keyframe, you specify an offset that defines at which point in the animation that keyframe applies. The offset is a number between zero, which marks the beginning of the animation, and one, which marks the end.</p><p>Note that the offsets are not defined in terms of absolute time. They are relative measures from zero to one. The final timeline of the animation is based on the combination of keyframe offsets, duration, delay, and easing.</p><br><xblog-code-panel><xblog-title>{{multiStepAnimations.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"multiStepAnimations.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"multiStepAnimations.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><h2 id=\"parallel-animations\" class=\"section-heading\">Parallel animations</h2><p>Sometimes you may want to animate two CSS properties but use a different easing function for each one, this's case, <span xblog-highlight>animation groups</span> comes to play.</p><br><p>It allows you to configure different timings for animations that happen in parallel.</p><br><xblog-code-panel><xblog-title>{{parallelAnimations.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"parallelAnimations.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"parallelAnimations.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br>",
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