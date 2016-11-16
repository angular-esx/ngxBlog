import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1476250476Component = Component({
  selector: 'article',
  template: "<p>Zone.js is a great library which provide us the power to change the way we deal with asynchronous code.</p><p>At NG-Conf 2014, <a [href]=\"references.BrianPageLink\" rel=\"nofollow\">Brian</a> gave an excellent <a [href]=\"references.zoneVideoLink\" rel=\"nofollow\">talk on zones</a>. If you haven’t watched this talk yet, give it a shot, it’s just ~15 minutes long.</p><br><p>In Angular world, Zone plays very nicely with what Angular needs in order to perform change detection in our applications.</p><p>Now, let's think about what can change state in our applications.</p><br><p>Application state change is caused by three things:</p><br><p>- <strong>Events:</strong> User events like click, change, submit, …</p><p>- <strong>XMLHttpRequests:</strong> When fetching data from a remote service.</p><p>- <strong>Timers:</strong> setTimeout(), setInterval(), ...</p><br><p>You can realize easily that <strong>they are all asynchronous</strong>.</p><p>Because Angular takes advantage of Zones which is why Angular can easily find out, when to update the DOM if you make a change to component's input property by using event or timer or other async ways.</p><br><p>In fact, the code that tells Angular to perform change detection is as simple as this.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"ngZone.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Whenever Angular’s zone emits an <span xblog-highlight>onTurnDone</span> event, it runs a task that performs change detection for the entire application.</p><br><p>But wait, onTurnDone is not a part of the default Zone API, so where does it come from ? and how does change detection in Angular 2 work ?</p><br><p>Well, we'll talk about all of them in this article later.</p><p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"ng-zone\" class=\"section-heading\">NgZone in Angular 2</h2><p><span xblog-highlight>NgZone</span> is basically a forked zone that extends its API and adds some additional functionality to its execution context.</p><p>One of the things it adds to the API is the following set of custom events we can subscribe to, as they are observable streams:</p><br><p>- <strong>onTurnStart()</strong> Notifies subscribers just before Angular’s event turn starts.</p><p>- <strong>onTurnDone()</strong> Notifies subscribers immediately after Angular’s zone is done processing the current turn and any micro tasks scheduled from that turn.</p><p>- <strong>onEventDone()</strong> Notifies subscribers immediately after the final onTurnDone() callback.</p><br><p>The main reason Angular adds its own event emitters instead of relying on <span xblog-highlight>beforeTask</span> and <span xblog-highlight>afterTask</span> callbacks, is that it has to keep track of timers and other micro tasks.</p><p>It’s also nice that Observables are used as an API to handle these events.</p><br><p>Since <span xblog-highlight>NgZone</span> is really just a fork of the global zone, Angular has full control over when to run something inside its zone to perform change detection and when not.</p><p>Actually, sometimes, for the event which is fired very frequently such as <span xblog-highlight>mousemove</span>, we don't want Angular to perform change detection every time for it.</p><br><p>That’s why NgZone comes with an API <span xblog-highlight>runOutsideAngular()</span> which performs a given task in NgZone’s parent zone, which does not emit an <span xblog-highlight>onTurnDone</span> event, hence no change detection is performed.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"ngZone.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>In above example, first, we injected <span xblog-highlight>NgZone</span> into <span xblog-highlight>exampleComponent</span>.</p><p>Next, inside of exampleComponent's <span xblog-highlight>process()</span> we execution something logic by using <span xblog-highlight>runOutsideAngularZone()</span>.</p><p>If you change any application state at here, Angular will not perform any change detection, it mean that there aren't' any updates for the UI.</p><p>However, once our logic is done, we run another task inside Angular’s zone again using <span xblog-highlight>run()</span> which in turn causes Angular to perform change detection which will update the UI.</p><br><p>At this point, we hope you got basic knowledges about how to use NgZone in Angular 2.</p><p>We'll go to next subject, how we should control change detection in Angular.</p><br><h2 id=\"change-detection-on-push\" class=\"section-heading\">ChangeDetectionStrategy.OnPush</h2><p>In Angular 2, <strong>each component has its own change detector.</strong> and an Angular application consists of a component tree, the logical result is that we’re having a <strong>change detector tree</strong> too.</p><br><p>This tree can also be viewed as a directed graph where data always flows from top to bottom.</p><p>The reason why data flows from top to bottom, is because change detection is also always performed from top to bottom for every single component, every single time, starting from the root component. This is awesome, as unidirectional data flow is more predictable than cycles.</p><br><p>By default, even if we have to check every single component every single time an event happens, Angular is very fast. It can perform hundreds of thousands of checks within a couple of milliseconds.</p><br><p>Look at a simple example.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"onPush.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>As you can see, we have a component tree that <span xblog-highlight>exampleComponent</span> is parent of <span xblog-highlight>childComponent</span>, and <span xblog-highlight>childComponent</span> is parent of <span xblog-highlight>infoComponent</span>.</p><p>In exampleComponent, we created a <span xblog-highlight>model</span> then bound it to childComponent & infoComponent.</p><p>When <span xblog-highlight>changeModel()</span> is triggered, we'll set new value to <span xblog-highlight>text</span> property of exampleComponent.</p><p>Our example is very simple, right ? Now run it and look at the result below.</p><br><div class=\"screen-capture\"><img [src]=\"onPush.screenCaptures[1]\"></div><br><p>What's important at here ? The important thing we want to show you is that although <span xblog-highlight>text</span> property of <span xblog-highlight>exampleComponent</span> isn't bound to <span xblog-highlight>childComponent</span>, but when we changed it, Angular would check all our components. That's the way Angular run change detection by default as I mentioned above.</p><br><p>But we can make Angular do smarter change detection by telling Angular to only run change detection for the parts of the application that changed their state.</p><p>In order to do that for our example, we'll set <span xblog-highlight>ChangeDetectionStrategy.OnPush</span> to <span xblog-highlight>childComponent</span>.</p><br><xblog-code-panel><xblog-title>{{onPush.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"onPush.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"onPush.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>Now run our example again, you'll see Angular skip entire change detection subtrees of childComponent when input properties don’t change.</p><br><div class=\"screen-capture\"><img [src]=\"onPush.screenCaptures[2]\"></div><br><h2 id=\"immutable-objects\" class=\"section-heading\">Immutable objects</h2><p>In this subject, we'll do a little changes to our example, just like that.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"immutable.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>What's the result you expect ? We guess that you expect the firstname in UI will be updated, right ? But actually, there is not any update at there ! Why ?</p><br><p>Because we has mutated <span xblog-highlight>model</span> by changing its <span xblog-highlight>firstname</span> property.</p><p>Even though that property is going to be changed, <strong>the model reference itself stays the same.</strong>.</p><p>As you know about the way Angular work with <span xblog-highlight>ChangeDetectionStrategy.OnPush</span>, It skip change detection for this component’s subtree if none of its inputs changed.</p><p>That's why <span xblog-highlight>infoComponent</span> isn't checked, and has no any update for the UI.</p><br><p>The solution for this case is that we'll make <span xblog-highlight>model</span> input property immutable.</p><p>It mean that <strong>If there’s a change to model, we get a new reference.</strong>.</p><p>For our example, we just use <span xblog-highlight>exampleService</span> to create a new reference when make a change to model. Of course, you can use any immutable library you like. One recommend for you is <a [href]=\"references.immutableLink\" rel=\"nofollow\">Immutable.js</a>.</p><br><xblog-code-panel type=\"no-header\"><xblog-title>{{immutable.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"immutable.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"immutable.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><h2 id=\"asynchronous-actions\" class=\"section-heading\">Asynchronous actions</h2><p>In your real application, you always need to fetch data from remote service by using <span xblog-highlight>Observable</span> or using <span xblog-highlight>Timer</span> to do something asynchronously.</p><p>There's an issue we want to show you when use them with <span xblog-highlight>ChangeDetectionStrategy.OnPush</span> at there.</p><br><p>First, we'll re-write our example, remove <span xblog-highlight>changeModel()</span> from <span xblog-highlight>exampleComponent</span>, and use a timer to create a new reference for <span xblog-highlight>model</span> property of <span xblog-highlight>childComponent</span>.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"changeDetectorRef.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Although you see we have assigned new reference to model, but actually <span xblog-highlight>infoComponent</span> is not checked at there.</p><p>This is not really a bug, Angular provide us the way to enable paths in the component tree to be checked for certain events, which is exactly what we need in that case.</p><br><br><xblog-code-panel><xblog-title>{{changeDetectorRef.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"changeDetectorRef.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"changeDetectorRef.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>We injected <span xblog-highlight>ChangeDetectorRef</span> into <span xblog-highlight>childComponent</span>'s constructor. Then inside of the timer, we called <span xblog-highlight>changeDetectorRef.markForCheck()</span>.</p><p>That's it. Now, when change detection is performed, it’ll simply go from top to bottom. Once the change detection run is over, it’ll restore the <span xblog-highlight>OnPush</span> state for the entire tree.</p>",
  host: {
    '[class.xblog-article-1476250476]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1476250476;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      BrianPageLink: 'https://twitter.com/briantford',
      zoneVideoLink: 'https://www.youtube.com/watch?v=3IqtmUscE_U',
      immutableLink: 'https://facebook.github.io/immutable-js/'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng-zone', name: 'ngZone in Angular 2' },
      { id: 'change-detection-on-push', name: 'ChangeDetectionStrategy.OnPush' },
      { id: 'immutable-objects', name: 'Immutable objects' },
      { id: 'asynchronous-actions', name: 'Asynchronous actions' }
    ])
    .build();

    this.ngZone = {
      codeBlocks: {
        1: this.getCodeBlock(getNgZone01),
        2: this.getCodeBlock(getNgZone02)
      }
    }; 

    this.onPush = {
      sourceCode: {
        name: 'ChangeDetectionStrategy.OnPush',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'on-push')
      },
      codeBlocks: {
        1: this.getCodeBlock(getOnPush01),
        2: this.getCodeBlock(getOnPush02)
      },
      screenCaptures: {
        1: resourceUtils.getImg('onPush-example-1-1476250476.png'),
        2: resourceUtils.getImg('onPush-example-2-1476250476.png')
      }
    }; 

    this.immutable = {
      sourceCode: {
        name: 'Immutable',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'immutable')
      },
      codeBlocks: {
        1: this.getCodeBlock(getImmutable01),
        2: this.getCodeBlock(getImmutable02)
      }
    };

    this.changeDetectorRef = {
      sourceCode: {
        name: 'ChangeDetectorRef',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'change-detector-ref')
      },
      codeBlocks: {
        1: this.getCodeBlock(getChangeDetectorRef01),
        2: this.getCodeBlock(getChangeDetectorRef02)
      }
    }; 
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getNgZone01(){
  return `
    ObservableWrapper.subscribe(this.zone.onTurnDone, () => {
      this.zone.run(() => {
        this.tick();
      });
    });

    tick() {
      // perform change detection
      this.changeDetectorRefs.forEach((detector) => {
        detector.detectChanges();
      });
    }`;
}

function getNgZone02(){
  return `
    import * as ngCore from '@angular/core';

    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      constructor: [ 
        ngCore.NgZone,

        function(ngZone){
          this.ngZone = ngZone;
        }
      ],

      process() {
        .....
        this.ngZone.runOutsideAngular(function(){
          // do something here
          .....
          this.ngZone.run(function(){ console.log('Outside Done!'); });
        });
      }
    });`;
}

function getOnPush01(){
  return `
    import * as ngCore from '@angular/core';

    export var infoComponent = ngCore.Component({
      selector: 'my-info',
      template: [
        '<p><strong>First Name:</strong> {{model.firstName}}</p>',
        '<p><strong>Last Name:</strong> {{model.lastName}}</p>'
      ].join(''),
      inputs: [ 'model' ]
    })
    .Class({
      constructor: function(){},

      ngDoCheck: function(){
        console.log('infoComponent checked');
      }
    });

    /*--------------------------------------------------------------*/

    export var childComponent = ngCore.Component({
      selector: 'my-child',
      template: '<my-info [model]="model"></my-info>',
      directives: [ infoComponent ],
      inputs: [ 'model' ]
    })
    .Class({
      constructor: function(){},

      ngDoCheck: function(){
        console.log('childComponent checked');
      }
    });

    /*--------------------------------------------------------------*/

    export var exampleComponent = ngCore.Component({
      selector: 'my-example',
      template: [
        '<h1>ChangeDetectionStrategy.OnPush</h1>',
        '<button (click)="changeModel()">Change Model</button>',
        '<br/>',
        '<my-child [model]="model"></my-child>'
      ].join(''),
      directives: [ childComponent ]
    })
    .Class({
      constructor: function(){},

      ngDoCheck: function(){
        console.log('exampleComponent checked');
      },

      ngOnInit: function(){
        this.text = '';

        this.model = {
          firstName: 'Leon',
          lastName: 'Kennedy'
        };
      },

      changeModel: function(){
        console.log('Changing Model');
        
        this.text = 'text changed';
      }
    });`;
}

function getOnPush02(){
  return `
    export var childComponent = ngCore.Component({
      .....
      changeDetection: ngCore.ChangeDetectionStrategy.OnPush
    })
    .Class({.....});`;
}

function getImmutable01(){
  return `
    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      .....

      changeModel: function(){
        console.log('Changing Model');

        this.model.firstName = 'Christ';
      }
    });`;
}

function getImmutable02(){
  return `
    import * as ngCore from '@angular/core';

    export var exampleService = ngCore.Class({
      constructor: function(){},

      createModel: function(firstName, lastName){
        return {
          firstName: 'Leon',
          lastName: 'Kennedy',
          set: function(propName, propValue){
            return Object.assign({}, this, { [propName]: propValue });
          }
        };
      }
    });

    /*-----------------------------------------------------------------*/

    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      constructor: [
        exampleService,

        function(exampleService){
          this.exampleService = exampleService;
        }
      ],

      .....

      ngOnInit: function(){
        this.model = this.exampleService.createModel('Leon', 'Kennedy');
      },

      changeModel: function(){
        console.log('Changing Model');

        this.model = this.model.set('firstName', 'Christ');
      }
    });`;
}

function getChangeDetectorRef01(){
  return `
    import * as ngCore from '@angular/core';

    export var childComponent = ngCore.Component({
      .....
      changeDetection: ngCore.ChangeDetectionStrategy.OnPush
    })
    .Class({
      .....

      ngOnInit: function(){
        var _self = this;
        setTimeout(function(){
          console.log('Changing Model');

          _self.model =  {
            firstName: 'Christ',
            lastName: 'Kennedy'
          };
        }, 3 * 1000);
      }
    });`;
}

function getChangeDetectorRef02(){
  return `
    import * as ngCore from '@angular/core';

    export var childComponent = ngCore.Component({
      .....
      changeDetection: ngCore.ChangeDetectionStrategy.OnPush
    })
    .Class({
      constructor: [
        ngCore.ChangeDetectorRef,

        function(changeDetectorRef){
          this.changeDetectorRef = changeDetectorRef;
        }
      ],

      ngOnInit: function(){
        var _self = this;
        setTimeout(function(){
          console.log('Changing Model');

          _self.model =  {
            firstName: 'Christ',
            lastName: 'Kennedy'
          };

          _self.changeDetectorRef.markForCheck();
        }, 3 * 1000);
      }

      .....
    });`;
}