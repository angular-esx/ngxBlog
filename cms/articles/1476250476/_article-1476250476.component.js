import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1476250476Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1476250476.html',
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