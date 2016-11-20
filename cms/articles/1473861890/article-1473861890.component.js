import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1473861890Component = Component({
  selector: 'article',
  template: "<p>In previous articles, you've alreadry gotten knowledges about directives/components.</p><p>Go on with a subject relate to them, I'll show you their lifecycle.</p><br><p>A component has a lifecycle managed by Angular itself.</p><p>Angular offers component lifecycle hooks that give us the ability to act when they occur.</p><p>No directive or component will implement all of them and some of the hooks only make sense for components.</p><br><p>After component's constructor is called to create an instance, Angular calls its lifecycle hook methods in following sequence.</p><p>Angular only calls a hook method if it is defined.</p><br><xblog-table><ngx-grid xblog-table-width=\"45rem\"><ngx-grid-row xblog-table-header><ngx-grid-col size=\"xs-4\">Hooks</ngx-grid-col><ngx-grid-col size=\"xs-8\">Timing</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnChanges</ngx-grid-col><ngx-grid-col size=\"xs-8\">Before ngOnInit and when a data-bound input property value changes.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After the first ngOnChanges.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngDoCheck</ngx-grid-col><ngx-grid-col size=\"xs-8\">During every Angular change detection cycle.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterContentInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After projecting content into the component.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterContentChecked</ngx-grid-col><ngx-grid-col size=\"xs-8\">After every check of projected component content.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterViewInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After initializing the component's views and child views.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterViewChecked</ngx-grid-col><ngx-grid-col size=\"xs-8\">After every check of the component's views and child views.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnDestroy</ngx-grid-col><ngx-grid-col size=\"xs-8\">Just before Angular destroys the directive/component.</ngx-grid-col></ngx-grid-row></ngx-grid></xblog-table><br><p>We'll detail each lifecycle hook and find out how we should work with them.</p><p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"ngOnChanges\" class=\"section-heading\">ngOnChanges</h2><p>This hook method executes before <span xblog-highlight>ngOnInit</span> and when a data-bound input property value changes.</p><p>The method receives a object of current and previous values, I call it is <span xblog-highlight>changeRecord</span>.</p><br><p>For example, I have <span xblog-highlight>ngOnChangesComponent</span> as below.</p><br><xblog-code-panel><xblog-title>{{ngOnChanges.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngOnChanges.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngOnChanges.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>There're 2 binding, <span xblog-highlight>title</span> is a primitive value, <span xblog-highlight>model</span> is an object.</p><p>Because I bound data to <span xblog-highlight>childComponent</span> so after its constructor executed, its <span xblog-highlight>ngOnChanges</span> will be fired.</p><p>3 seconds later, its ngOnChanges fires one more time because I've changed data-bound property values.</p><p>As you see the below image, although ngOnChanges fires twice, but its <span xblog-highlight>changeRecord</span> is not same.</p><p>In the second changes, changeRecord only contains current and previous values of <span xblog-highlight>title</span>.</p><p>The value of <span xblog-highlight>model</span> property is the reference to the object. Angular doesn't care if any its property's value changed.</p><p>If you really want Angular to fire ngOnChanges for every changes of model. <a href=\"https://facebook.github.io/immutable-js/\" rel=\"nofollow\">Immutable</a> will be a solution for you.</p><br><div class=\"screen-capture\"><img [src]=\"ngOnChanges.screenCaptures[1]\"></div><br><h2 id=\"ngOnInit\" class=\"section-heading\">ngOnInit</h2><p>This hook method executes after the first <span xblog-highlight>ngOnChanges</span>.</p><p>We turn to <span xblog-highlight>ngOnInit</span> for 2 reasons:</p><br><p>- To perform complex initializations shortly after construction.</p><p>- To set up the component after Angular sets the input properties.</p><br><p>Why shouldn't we fetch data from server in the constructor ? Because data-bound input properties only are set after construction.</p><p>If you fetch data with params which base on values of input properties, make sure you will get errors.</p><p>The constructor should do no more than set the initial local variables to simple values.</p><br><p>Look at the example with <span xblog-highlight>childComponent</span>.</p><br><xblog-code-panel><xblog-title>{{ngOnInit.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngOnInit.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngOnInit.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>And this is a screen capture for result.</p><br><div class=\"screen-capture\"><img [src]=\"ngOnInit.screenCaptures[1]\"></div><br><h2 id=\"ngDoCheck\" class=\"section-heading\">ngDoCheck</h2><p>It is called with enormous frequency, Angular fires it after every change detection cycle no matter where the change occurred.</p><p>Look at below sample, when you type something into textbox <span xblog-highlight>ngDoCheck</span> will be called.</p><p>Even, you move out of textbox, it's also called.</p><br><xblog-code-panel><xblog-title>{{ngDoCheck.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngDoCheck.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngDoCheck.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><div class=\"screen-capture\"><img [src]=\"ngDoCheck.screenCaptures[1]\"></div><br><p>Clearly, if you decide to implement your logic in there, make sure implementation must be very lightweight or the user experience may suffer.</p><br><h2 id=\"ngAfterContent\" class=\"section-heading\">ngAfterContent</h2><p>The <span xblog-highlight>ngAfterContentInit</span> and <span xblog-highlight>ngAfterContentChecked</span> hooks that Angular calls after Angular projects external content into the component.</p><p>Angular calls both ngAfterContent hooks before calling either of the <span xblog-highlight>ngAfterView</span> hooks.</p><br><p>The hooks take action based on changing values in a content child which we can only reach by querying for it via <span xblog-highlight>ContentChild</span>.</p><p>The ngAfterContent hooks concern <span xblog-highlight>ContentChildren</span>, the child components that Angular projected into the component.</p><br><p>Using <span xblog-highlight>ng-content</span> is a way to import Html from outside the component and insert content into component's template in a designated spot.</p><br><p>I have an exemple with <span xblog-highlight>childComponent</span> which use <span xblog-highlight>ng-content</span> like this.</p><br><xblog-code-panel><xblog-title>{{ngAfterContent.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterContent.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterContent.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>In <span xblog-highlight>exampleComponent</span> I've' projected <span xblog-highlight>titleComponent</span> and <span xblog-highlight>itemComponent</span> into childComponent like this.</p><br><xblog-code-panel><xblog-title>{{ngAfterContent.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterContent.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterContent.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>So you can see result in the below image, I've queried instances of <span xblog-highlight>titleComponent</span> & <span xblog-highlight>itemComponent</span>.</p><br><div class=\"screen-capture\"><img [src]=\"ngAfterContent.screenCaptures[1]\"></div><br><p>Notice that, Angular completes composition of the projected content before finishing the composition of this component's view.</p><p>We still have a window of opportunity to modify that view.</p><br><h2 id=\"ngAfterView\" class=\"section-heading\">ngAfterView</h2><p>The <span xblog-highlight>ngAfterViewInit</span> and <span xblog-highlight>ngAfterViewChecked</span> execute after initializing the component's views and child views.</p><br><p>The hooks take action based on changing values within the child view which we can only reach by querying for the child view via <span xblog-highlight>ViewChild</span>.</p><p>The AfterView hooks concern <span xblog-highlight>ViewChildren</span>, the child components whose element tags appear within the component's template.</p><br><p>Have a look at <span xblog-highlight>exampleComponent</span> & the result below.</p><br><xblog-code-panel><xblog-title>{{ngAfterView.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterView.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterView.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><div class=\"screen-capture\"><img [src]=\"ngAfterView.screenCaptures[1]\"></div><br><p>Do you see I used <span xblog-highlight>setTimeout()</span> in the example ?</p><p>If you try to update component's data-bound property immediately instead of using setTimeout, Angular throws an error.</p><br><p>Notice that we must adhere to Angular's unidirectional data flow rule which says that we may not update the view after it has been composed.</p><p>Both hooks fire after the component's view has been composed.</p><br><p>For <span xblog-highlight>ngAfterViewChecked</span>, Angular frequently calls it, even when there are no changes of interest. Write lean hook methods to avoid performance problems.</p><br><h2 id=\"ngOnDestroy\" class=\"section-heading\">ngOnDestroy</h2><p>This hook run just before Angular destroys the directive/component.</p><p>This is the place to free resources that won't be garbage collected automatically such as unsubscribe from observables and DOM events, stop interval timers etc.</p><br>",
  host: {
    '[class.xblog-article-1473861890]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1473861890;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ngOnChanges', name: 'ngOnChanges' },
      { id: 'ngOnInit', name: 'ngOnInit' },
      { id: 'ngDoCheck', name: 'ngDoCheck' },
      { id: 'ngAfterContent', name: 'ngAfterContent' },
      { id: 'ngAfterView', name: 'ngAfterView' },
      { id: 'ngOnDestroy', name: 'ngOnDestroy' }
    ])
    .build();

    this.ngOnChanges = {
      sourceCode: {
        exampleComponent: {
          name: 'ngOnChanges',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-changes/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngOnChanges-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock(getNgOnChanges)
      }
    };

    this.ngOnInit = {
      sourceCode: {
        childComponent: {
          name: 'ngOnInit',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngOnInit-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock(getNgOnInit)
      }
    };

    this.ngDoCheck = {
      sourceCode: {
        childComponent: {
          name: 'ngDoCheck',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-do-check/child.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngDoCheck-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock(getNgDoCheck)
      }
    };

    this.ngAfterContent = {
      sourceCode: {
        childComponent: {
          name: 'ngAfterContent',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/child.component.js')
        },
        exampleComponent: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngAfterContent-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock(getNgAfterContent01),
        2: this.getCodeBlock(getNgAfterContent02)
      }
    };

    this.ngAfterView = {
      sourceCode: {
        exampleComponent: {
          name: 'ngAfterView',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-view/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngAfterView-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock(getNgAfterView)
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});

function getNgOnChanges(){
  return `
    import * as ngCore from '@angular/core';

    import { childComponent } from './child.component';

    export var ngOnChangesComponent = ngCore.Component({
      selector: 'my-example',
      template: '<my-child [title]="title" [model]="model"></my-child>',
      directives: [ childComponent ]
    })
    .Class({
      constructor: function(){},

      ngOnInit: function() {
        this.title = 'ngOnChanges';
        this.model = { content: 'This is content of ngOnChanges' };

        var _self = this;
        setTimeout(function(){
          _self.title = 'ngOnChanges updated';
          _self.model.content = 'This is content of ngOnChanges';
        }, 3 * 1000);
      }
    });`;
}

function getNgOnInit(){
  return `
    import * as ngCore from '@angular/core';

    export var childComponent = ngCore.Component({
      selector: 'my-child',
      template: [
        '<h1>{{title}}</h1>',
        '<p>{{model.content}}</p>'
      ].join(''),
      properties: ['title', 'model']
    })
    .Class({
      constructor: function(){
        console.log(this.title);
        console.log(this.model);
      },

      ngOnInit: function(){
        console.log(this.title);
        console.log(this.model);
      }
    });`;
}

function getNgDoCheck(){
  return `
    import * as ngCore from '@angular/core';

    export var childComponent = ngCore.Component({
      selector: 'my-child',
      template: [
        '<center>',
          '<h1>ngDoCheck Example</h1>',
          'Title: <input [(ngModel)]="model.title" />',
        '</center>'
      ].join(''),
      properties: ['title']
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.model = { };
        this.model.title = this.currentTitle = this.title;
        this.noChangeCount = 0;
        this.changeDetected = null;
      },

      ngDoCheck: function(){
        if (this.model.title !== this.currentTitle) {
          this.changeDetected = true;
          
          console.log('ngDoCheck: Title changed to ' + this.model.title + ' from ' + this.currentTitle);

          this.currentTitle = this.model.title;
        }

        if (this.changeDetected) { this.noChangeCount = 0; } 
        else if (this.changeDetected === false) {
          this.noChangeCount++;
          console.log('ngDoCheck: called ' + this.noChangeCount + 'x when no change to title');
        }

        this.changeDetected = false;
      }
    });`;
}

function getNgAfterContent01(){
  return `
    import * as ngCore from '@angular/core';

    import { titleComponent } from './title.component';
    import { itemComponent } from './item.component';

    export var childComponent = ngCore.Component({
      selector: 'my-child',
      template: '<ng-content></ng-content>',
      queries: {
        title: new ngCore.ContentChild(titleComponent),
        items: new ngCore.ContentChildren(itemComponent)
      }
    })
    .Class({
      constructor: function(){},

      ngAfterContentInit: function(){
        //title & items will be available since there
        console.log('title', this.title);
        console.log('items', this.items);
      },

      ngAfterContentChecked: function(){
        // If there're changes to contentChild 
        // contentChild is updated at there after the content has been checked
        // This event is fired after every check of projected component content
      }
    });`;
}

function getNgAfterContent02(){
  return `
    import * as ngCore from '@angular/core';

    import { childComponent } from './child.component';
    import { titleComponent } from './title.component';
    import { itemComponent } from './item.component';

    export var ngAfterContentComponent = ngCore.Component({
      selector: 'my-example',
      template: [
        '<my-child>',
          '<my-title [title]="title"></my-title>',
          '<my-item *ngFor="let item of items" [item]="item"></my-item>',
        '</my-child>'
      ].join(''),
      directives: [ 
        childComponent,
        titleComponent,
        itemComponent
      ]
    })
    .Class({
      constructor: function(){},

      ngOnInit: function() {
        this.title = 'ngAfterContent';
        this.items = [
          { id: 1, name: 'item 01' },
          { id: 2, name: 'item 02' }
        ];
      }
    });`;
}

function getNgAfterView(){
  return `
    import * as ngCore from '@angular/core';

    import { childComponent } from './child.component';

    export var ngAfterViewComponent = ngCore.Component({
      selector: 'my-example',
      template: [
        '<h1 #title></h1>',
        '<my-child *ngFor="let item of items" [item]="item"></my-child>',
        '<div>ngAfterViewChecked is fired: {{noChangeCount}}x</div>'
      ].join(''),
      directives: [ childComponent ],
      queries: {
        title: new ngCore.ViewChild('title',  { read: ngCore.ElementRef }),
        childs: new ngCore.ViewChildren(childComponent)
      }
    })
    .Class({
      constructor: function(){},

      ngOnInit: function() {
        this.items = [
          { id: 1, name: 'item 01' },
          { id: 2, name: 'item 02' }
        ];
        this.noChangeCount = 0;
      },

      ngAfterViewInit: function(){
        //title & childs will be available since there
        this.title.nativeElement.innerHTML = 'ngAfterView';
        console.log('title', this.title.nativeElement);
        console.log('childs', this.items);
      },

      ngAfterViewChecked: function(){
        // If there're changes to ViewChild 
        // ViewChild is updated at there after the view has been checked
        // This event is fired after every check of the component's views and child views.
        var _self = this;
        setTimeout(function(){ 
          if(!_self.noChangeCount){ _self.noChangeCount++; } 
        });
      }
    });`;
}