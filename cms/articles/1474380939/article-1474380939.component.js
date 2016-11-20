import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1474380939Component = Component({
  selector: 'article',
  template: "<xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><p>Angular ships with its own dependency injection framework and we really can't build an Angular application without it.</p><p>An Angular application is a tree of components. Each component instance has its own injector. The tree of components parallels the tree of injectors.</p><p>We can re-configure the injectors at any level of that component tree with interesting and useful results.</p><br><p>Consider a simple example about <span xblog-highlight>TodosComponent</span>.</p><br><xblog-code-panel><xblog-title>{{simpleDI.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"simpleDI.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"simpleDI.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Each component instance gets its own injector and an injector at one level is a child injector of the injector above it in the tree.</p><br><p>When a component at the bottom requests a dependency, Angular tries to satisfy that dependency with a provider registered in that component's own injector.</p><p>If the component's injector lacks the provider, it passes the request up to its parent component's injector. If that injector can't satisfy the request, it passes it along to its parent component's injector.</p><p>The requests keep bubbling up until we find an injector that can handle the request or run out of component ancestors. If we run out of ancestors, Angular throws an error.</p><br><p>Dependencies are singletons within the scope of an injector.</p><br><p>In our example, <span xblog-highlight>logSerivce</span> are shared among <span xblog-highlight>todosComponent</span>, <span xblog-highlight>todoListComponent</span>, <span xblog-highlight>todoItemComponent</span>. Because it is hosted by todosComponent which is parents of todoListComponent & todoItemComponent.</p><p>todoListComponent can inject logSerivce from todosComponent via its constructor. However, nested injectors at todoItemComponent create their own service instances by using <span xblog-highlight>providers</span> to host <span xblog-highlight>logService</span> itself.</p><br><div class=\"screen-capture\"><img [src]=\"simpleDI.screenCaptures[1]\"></div><br><h2 id=\"injector-providers\" class=\"section-heading\">Injector providers</h2><p>A provider provides the concrete of a dependency value.</p><p>The injector relies on providers to create instances of the services that the injector injects into components and other services.</p><br><p>As you know, we can register service provider or directive provider by using <span xblog-highlight>providers</span> & <span xblog-highlight>directives</span> in component's declaration.</p><p>Look back our example, you can see the way we registered <span xblog-highlight>logSerivce</span> in <span xblog-highlight>TodosComponent</span>.</p><br><p>But there are many ways that we can configure the injector with alternative providers that can deliver an object that behaves like logSerivce. We'll expore them now.</p><br><h2 id=\"class-provider\" class=\"section-heading\">Class Provider</h2><p>We wrote the providers array like this: <span xblog-highlight>providers: [ logSerivce ]</span></p><p>This is actually a short-hand expression for a provider registration.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"classProvider.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>The first is the token that serves as the key for both locating a dependency value and registering the provider.</p><p>The second is a provider definition object, which we can think of as a recipe for creating the dependency value.</p><br><p>With this expression, it's easy for us specify another class to provide the service.</p><p>For example we have another service is <span xblog-highlight>superLogService</span>, We can register it for <span xblog-highlight>todoListComponent</span> with <span xblog-highlight>logSerivce token</span> instead of <span xblog-highlight>logSerivce</span> class.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"classProvider.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>However, lets look back the example that you registered <span xblog-highlight>logService</span> in <span xblog-highlight>todosComponent</span> then you used <span xblog-highlight>useClass</span> to register <span xblog-highlight>superLogService</span> in <span xblog-highlight>todoListComponent</span>.</p><p>So how can todoItemComponent inject logService from todoComponent instead of superLogService from todoListComponent ?</p><br><p>The solution for this case is you should use <span xblog-highlight>useExisting</span> with <span xblog-highlight>rootLogService token</span> for register in todosComponent.</p><br><xblog-code-panel><xblog-title>{{classProvider.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"classProvider.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"classProvider.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><div class=\"screen-capture\"><img [src]=\"classProvider.screenCaptures[1]\"></div><br><h2 id=\"value-provider\" class=\"section-heading\">Value Provider</h2><p>Sometimes it's easier to provide a object rather than ask the injector to create it from a class.</p><p>We can re-write <span xblog-highlight>superLogService</span> as an object then registering it by using <span xblog-highlight>useValue</span> like this.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"valueProvider.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Now, you have seen I used a class as the token such as <span xblog-highlight>logService</span>, <span xblog-highlight>rootLogService</span> for register, acttualy, there's another way for you to get the same result.</p><p>The way I'm mentioning is using <span xblog-highlight>OpaqueToken</span> & <span xblog-highlight>ngCore.Inject</span>.</p><br><xblog-code-panel><xblog-title>{{valueProvider.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"valueProvider.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"valueProvider.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p><span xblog-highlight>OpaqueToken</span> is a good solution for us to inject global variables such as window, localstorage into our component.</p><br><h2 id=\"factory-provider\" class=\"section-heading\">Factory provider</h2><p>Sometimes we need to create the dependent value dynamically, based on information we won't have until the last possible moment. This situation calls for a factory provider.</p><br><p>Let's illustrate, we want to implement a logic like that if user is authenticated, <span xblog-highlight>superLogService</span> should be injected into our components, otherwise, <span xblog-highlight>logSerivce</span> should be used.</p><p>Assume that we have <span xblog-highlight>userService</span> which provide information about authentication. We re-write declaration for providers as below.</p><br><xblog-code-panel><xblog-title>{{factoryProvider.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"factoryProvider.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"factoryProvider.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>The <span xblog-highlight>deps</span> property is an array of provider tokens which our factory requires for injection.</p><br><h2 id=\"optional-dependencies\" class=\"section-heading\">Optional dependencies</h2><p>As you know, if Angular can't resolve injection for component, it'll throw an exception.</p><p>In fact, there're situations, we allow the constructor's arguments to be <span xblog-highlight>null</span>. We can tell Angular that the dependency is optional by annotating the constructor argument with <span xblog-highlight>Optional</span>.</p><p>Of course, your code must be prepared to handle a null value.</p><br><xblog-code-panel><xblog-title>{{optionalDependency.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"optionalDependency.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"optionalDependency.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><h2 id=\"dependency-visibility\" class=\"section-heading\">Dependency visibility</h2><p>Well, as we learned, we can use the <span xblog-highlight>providers</span> property to define providers for its injector.</p><p><p>However, it turns out that there’s another property <span xblog-highlight>viewProviders</span> that basically allows us to do the same thing. What’s the difference between those two them ?</p><br><p><span xblog-highlight>viewProviders</span> allows us to define injector providers that are only available for a component’s view.</p><p>Let’s take a closer look at what that means by using our <span xblog-highlight>TodosComponent</span> example.</p><br><xblog-code-panel><xblog-title>{{dependencyVisibility.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"dependencyVisibility.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"dependencyVisibility.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>As you can see, <span xblog-highlight>todoTitleComponent</span> is <span xblog-highlight>contentChild</span> of TodoListComponent, <span xblog-highlight>todoItemComponent</span> is <span xblog-highlight>viewChild</span> of TodoListComponent.</p><p>Both todoTitleComponent & todoItemComponent require an instance of the class which is provided via <span xblog-highlight>logSerivce token</span>.</p><p>How should we do if we expect that todoTitleComponent require <span xblog-highlight>logSerivce</span>'s instance, todoItemComponent require <span xblog-highlight>superLogService</span>'s instance ?</p><br><p>With viewProviders we can tell the DI system very specifically, which providers are available to which child injectors.</p><p>To make our code work as expected, all we have to do is to make the supperLogService provider of todoListComponent explicitly available only for its viewChild by using <span xblog-highlight>viewProviders</span> instead of <span xblog-highlight>providers</span>.</p><br><div class=\"screen-capture\"><img [src]=\"dependencyVisibility.screenCaptures[1]\"></div><br><p>Now, whenever a component of <span xblog-highlight>todoListComponent</span>'s view asks for something of type <span xblog-highlight>logSerivce</span>, it’ll get an instance of <span xblog-highlight>superLogService</span> as expected.</p><p>Other child components from the outside world(contentChild) that ask for the same type, however, they won’t see this provider and will continue with the lookup in the injector tree.</p><p>Which means <span xblog-highlight>todoTitleComponent</span> now gets an expected instance from another parent injector without even knowing that <span xblog-highlight>todoListComponent</span> actually introduces its own provider.</p><br><p>Note that, <span xblog-highlight>viewProviders</span> are also only available in components, not in directives. That’s simply because a directive doesn’t have its own view.</p><br><h2 id=\"restricting-dependency-lookup\" class=\"section-heading\">Restricting dependency lookup</h2><p>We'll go on with the example in <span xblog-highlight>Dependency visibility</span> subject.</p><p>Now, look back again, in the example, todoItemComponent requires <span xblog-highlight>logSerivce</span>, follow DI rules, it will receice <span xblog-highlight>superLogService</span> which is provided by todoListComponent.</p><p>This's so cool, however this can be problematic. Just imagine someone uses our <span xblog-highlight>todoItemComponent</span> with their <span xblog-highlight>customTodoListComponent</span> which doesn't provide <span xblog-highlight>superLogService</span>.</p><p>What will happen ? our <span xblog-highlight>todoItemComponent</span> will receice <span xblog-highlight>logSerivce</span>'s instance from another parent injector instead. It's unexpected.</p><br><p>If we need to ensure that <span xblog-highlight>superLogService</span> instance is always instatiated by our component’s host or an exception should be thrown. <span xblog-highlight>Host</span> dependency is a solution for us.</p><br><xblog-code-panel><xblog-title>{{hostDependency.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"hostDependency.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"hostDependency.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br>",
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