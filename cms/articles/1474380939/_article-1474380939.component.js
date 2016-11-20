import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1474380939Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1474380939.html',
  host: {
    '[class.xblog-article-1474380939]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1474380939;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'injector-providers', name: 'Injector providers' },
      { id: 'class-provider', name: 'Class provider' },
      { id: 'value-provider', name: 'Value provider' },
      { id: 'factory-provider', name: 'Factory provider' },
      { id: 'optional-dependencies', name: 'Optional dependencies' },
      { id: 'dependency-visibility', name: 'Dependency visibility' },
      { id: 'restricting-dependency-lookup', name: 'Restricting dependency lookup' },
    ])
    .build();

    this.simpleDI = {
      sourceCode: {
        name: 'Simple DI',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'simple-di')
      },
      codeBlocks: {
        1: this.getCodeBlock(getSimpleDI)
      },
      screenCaptures: {
        1: resourceUtils.getImg('simpleDI-example-1474380939.png')
      }
    };

    this.classProvider = {
      sourceCode: {
        name: 'Class provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'class-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock(getClassProvider01),
        2: this.getCodeBlock(getClassProvider02),
        3: this.getCodeBlock(getClassProvider03)
      },
      screenCaptures: {
        1: resourceUtils.getImg('classProvider-example-1474380939.png')
      }
    };

    this.valueProvider = {
      sourceCode: {
        name: 'Value provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'value-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock(getValueProvider01),
        2: this.getCodeBlock(getValueProvider02)
      }
    };

    this.factoryProvider = {
      sourceCode: {
        name: 'Factory provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'factory-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock(getFactoryProvider)
      }
    };

    this.optionalDependency = {
      sourceCode: {
        name: 'Optional dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'optional-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock(getOptionalDependency)
      }
    };

    this.hostDependency = {
      sourceCode: {
        name: 'Host dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'host-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock(getHostDependency)
      }
    };

    this.dependencyVisibility = {
      sourceCode: {
        name: 'Dependency visibility',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'dependency-visibility')
      },
      codeBlocks: {
        1: this.getCodeBlock(getDependencyVisibility)
      },
      screenCaptures: {
        1: resourceUtils.getImg('dependencyVisibility-example-1474380939.png')
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});

function getSimpleDI(){
  return `
    import * as ngCore from '@angular/core';

    export var logService = ngCore.Class({
      constructor: function(){
        this.name = 'logService';
      },

      setName: function(name){
        this.name = name;
      }
    });

    /*---------------------------------------------------------*/

    export var todoItemComponent = ngCore.Component({
      .....
      providers: [ logService ]
    })
    .Class({
      constructor: [logService, function(logService){
        console.log('todoItemComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todoListComponent = ngCore.Component({
      .....
      directives: [ todoItemComponent ]
    })
    .Class({
      constructor: [logService, function(logService){
        console.log('todoListComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todosComponent = ngCore.Component({
      .....
      providers: [ logService ],
      directives: [ todoListComponent, todoItemComponent ]
    })
    .Class({
      constructor: [logService, function(logService){
        logService.setName('logService is hosted by todosComponent');
      }]
    });`;
}

function getClassProvider01(){
  return `
    ngCore.Component({
      .....
      providers: [{ provide: logSerivce, useClass: logSerivce }]
    })
    .Class(.....);`;
}

function getClassProvider02(){
  return `
    export var todoListComponent = ngCore.Component({
      .....
      providers: [
        { provide: logService, useClass: supperLogService } 
      ]
    })
    .Class(.....);`;
}

function getClassProvider03(){
  return `
    import * as ngCore from '@angular/core';

    export var rootLogService = ngCore.Class({
      constructor: function(){}
    });

    /*---------------------------------------------------------*/

    export var supperLogService = ngCore.Class({
      constructor: function(){
        this.name = 'supperLogService';
      }
    });

    /*---------------------------------------------------------*/

    export var todoItemComponent = ngCore.Component({
      .....
    })
    .Class({
      constructor: [rootLogService, function(logService){
        console.log('todoItemComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todoListComponent = ngCore.Component({
      .....
      directives: [ todoItemComponent ],
      providers: [
        { provide: logService, useClass: supperLogService } 
      ]
    })
    .Class({
      constructor: [logService, function(logService){
        console.log('todoListComponent', logService.name + ' is hosted by todoListComponent');
      }]
    });

    /*---------------------------------------------------------*/

    export var todosComponent = ngCore.Component({
      .....
      directives: [ todoListComponent, todoItemComponent ],
      providers: [
        logService,
        { provide: rootLogService, useExisting: logService }
      ]
    })
    .Class({
      constructor: [logService, function(logService){
        logService.setName('logService is hosted by todosComponent');
      }]
    });`;
}

function getValueProvider01(){
  return `
    export var supperLogService = {
      name: 'supperLogService'
    };

    /*---------------------------------------------------------*/

    export var todoListComponent = ngCore.Component({
      .....
      providers: [
        { provide: logService, useValue: supperLogService } 
      ]
    })
    .Class(.....);`;
}

function getValueProvider02(){
  return `
    import { OpaqueToken } from '@angular/core';

    export var WINDOW = new OpaqueToken('window');

    export var WINDOW_PROVIDERS = [
      { provide: WINDOW, useValue: window }
    ];

    /*---------------------------------------------------------*/

    import { WINDOW } from './window.model';

    export var logService = ngCore.Class({
      constructor: [
        ngCore.Inject(WINDOW),

        function(window){
          this.window = window;
        }
      ],

      log: function(text){
        this.window.console.log(text);
      }
    });

    /*---------------------------------------------------------*/

    import { WINDOW_PROVIDERS } from './window.model';

    export var todosComponent = ngCore.Component({
      .....
      providers: [ 
        logService,
        WINDOW_PROVIDERS
      ]
    })
    .Class({
      constructor: [logService, function(logService){
        logService.log('This message is logged by using window.console via DI');
      }]
    });`;
}

function getFactoryProvider(){
  return `
    export var userService = ngCore.Class({
      .....
      setAuth: function(isAuth){
        this.isAuth = isAuth;
      }
    });

    /*---------------------------------------------------------*/

    export var todoListComponent = ngCore.Component({
      .....
      providers: [
        { 
          provide: logService, 
          useFactory: function(userService){
            return userService.isAuth ? new supperLogService() : new logService();
          },
          deps: [userService] 
        }
      ]
    })
    .Class({
      constructor: [logService, function(logService){
        console.log('todoListComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todosComponent = ngCore.Component({
      .....
      providers: [ userService ]
    })
    .Class({
      constructor: [userService, function(userService){
        this.userService.setAuth(true);
      }]
    });`;
}

function getOptionalDependency(){
  return `
    export var todoListComponent = ngCore.Component({.....})
    .Class({
      constructor: [
        [ new ngCore.Optional(), ngCore.Inject(logService) ], 
        
        function(logService){
          if(!logService) {
            console.log('todoListComponent', 'logService is null');
          }
        }
      ]
    });`;
}

function getHostDependency(){
  return `
    export var todoItemComponent = ngCore.Component({.....})
    .Class({
      constructor: [
        [ new ngCore.Host(), ngCore.Inject(logService) ],

        function(logService){
          console.log('todoItemComponent', logService.name);
        }
      ]
    });`;
}

function getDependencyVisibility(){
  return `
    export var todoTitleComponent = ngCore.Component({.....})
    .Class({
      constructor: [logService, function(logService){
          console.log('todoTitleComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todoItemComponent = ngCore.Component({.....})
    .Class({
      constructor: [logService, function(logService){
          console.log('todoItemComponent', logService.name);
      }]
    });

    /*---------------------------------------------------------*/

    export var todoListComponent = ngCore.Component({
      .....
      template: [
        '<ng-content></ng-content>',
        '<todo-item *ngFor="let todo of todos" [name]="todo"></todo-item>'
      ].join(''),
      viewProviders: [
        { provide: logService, useClass: supperLogService }
      ]
    })
    .Class({
      constructor: [logService, function(logService){}]
    });

    /*---------------------------------------------------------*/

    export var todosComponent = ngCore.Component({
      .....
      template: [
        '<todo-list>',
          '<todo-title title="todosComponent"></todo-title>',
        '</todo-list>'
      ].join(''),
      providers: [ logService ]
    })
    .Class({
      constructor: [logService, function(logService){}]
    });`;
}