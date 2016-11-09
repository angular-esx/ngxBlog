import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';

export var article1475436850Component = Component({
  selector: 'article',
  template: "<h2>Services</h2><p>Every application is composed of a lot of subsystems that do different things like logging, data access, caching, specific application domain knowledge, etc. Depending on the type of application that you are building or the framework that you are using there’s different ways to represent these subsystems.</p><p>Angular 2 uses the concept of services, an Angular 2 service is a class that encapsulates some sort of functionality and provides it as a service for the rest of your application.</p><p>If you have an Angular 1 background you’ll welcome this simplification in the Angular conceptual model: there’s no more service/factory/constant/provider conumdrum. In Angular 2 there’s only services, and they are just vanilla ES6 classes.</p><h3>Creating a simple Service</h3>``` Simple Service ```<h3>Using Angular 2 DI to Inject Our Hero Service in the Hero List Component<h3>The we inject it into the HeroListComponent via its constructor: ``` Inject Service to Component ```<h3>Register Services at the Module Level</h3><p>With the NgModule decorator in RC5 and the new concept of Angular 2 Modules you can now register services to be used throughout a whole module. You can achieve that via the providers property of the NgModule decorator:</p>``` Inject Service to Module ```<p>When would you want to do that? – you may wonder. Well, whenever you want to use the same instance of a service for your whole application.</p></h3></h3>",
  host: {
    '[class.xblog-article-1475436850]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function article1475436850Component(sanitizer, articleService, tableContentService){
      this.id = 1475436850;
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

  getCodeBlock: function(fileName, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
