import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1473861890Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1473861890.html',
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