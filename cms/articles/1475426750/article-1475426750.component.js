import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1475426750Component = Component({
  selector: 'article',
  template: "<h2>Components</h2><p>In Angular 2, Components are the main way we build and specify elements and logic on the page.</p><p>Every Angular application has at least one component</p><p>Components are the basic building blocks of Angular applications. A component controls a portion of the screen—a view—through its associated template.</p><p>A Simple Component</p>``` 111 ``` A @Component decorator that associates metadata with the AppComponent component class: a selector that specifies a simple CSS selector for an HTML element that represents the component. a template that tells Angular how to render the component's view. A component class that controls the appearance and behavior of a view through its template. Here, you only have the root component, AppComponent. Since you don't need any application logic in the simple QuickStart example, it's empty. You export the AppComponent class so that you can import it into the application that you just created. Also, The component will have another attributes such as: host, input, output, directives, styles<h3>Template / TemplateUrl</h3><p>A component can have a template or templateUrl</p><p></p><h3>Styles / StyleUrls</h3><p>A component can have some styles that will be contained in styles or styleUrls</p><p></p><h3>Input</h3><p>This attribute will recevie data from other directives/components</p><h3>Output</h3><p>This attribute will send data to other directives/components</p><p>Input/Output attributes will help us share data between components/directives and components/directives</p><h3>Directives</h3><p>This attribute will inject directives to a component</p><p></p><h2>Directives</h2><p>In angular 2, Directives are the same Components without the template/templateUrl</p><p>A simple directive</p>``` 222 ```",
  host: {
    '[class.xblog-article-1475426750]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function article1475426750Component(sanitizer, articleService, tableContentService){
      this.id = 1475426750;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'my-heading', name: 'My heading' }
    ])
    .addSubHeadings([
      { headingId: 'my-heading', id: 'my-subheading', name: 'My subheading' },
    ])
    .build();

    this.codeBlock = this.getCodeBlock('code-block.html');
  },

  getCodeBlock: function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  },
});
