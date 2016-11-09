import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1476738850Component = Component({
  selector: 'article',
  template: "<h2>Binding syntax</h2><p>Data binding is a mechanism for coordinating what users see with application data values. While we could push values to and pull values from HTML, the application is easier to write, read, and maintain if we turn these chores over to a binding framework. We simply declare bindings between binding sources and target HTML elements and let the framework do the work.</p><p></p><p>Angular provides many kinds of data binding, and we’ll discuss each of them in this chapter. First we'll take a high-level view of Angular data binding and its syntax.</p><p></p><p>We can group all bindings into three categories by the direction in which data flows. Each category has its distinctive syntax:</p><table><tr><td>Data direction</td><td>Syntax</td><td>Binding type</td></tr><tr><td>One-way from data source to view target</td><td>{{expression}} [target] = \"expression\" bind-target = \"expression\"</td><td>Interpolation Property Attribute Class Style</td></tr><tr><td>One-way from view target to data source</td><td>(target) = \"statement\" on-target = \"statement\"</td><td></td></tr><tr><td>Two-way</td><td>Event</td><td>Two-way</td></tr></table><p>Binding types other than interpolation have a target name to the left of the equal sign, either surrounded by punctuation ([], ()) or preceded by a prefix (bind-, on-, bindon-).</p><p></p><p>What is that target? Before we can answer that question, we must challenge ourselves to look at template HTML in a new way.</p><h3>A new mental model</h3><p>With all the power of data binding and our ability to extend the HTML vocabulary with custom markup, it is tempting to think of template HTML as HTML Plus.</p><p>Well, it is HTML Plus. But it’s also significantly different than the HTML we’re used to. We really need a new mental model.</p><p>In the normal course of HTML development, we create a visual structure with HTML elements, and we modify those elements by setting element attributes with string constants.</p>",
  host: {
    '[class.xblog-article-1476738850]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function article1476738850Component(sanitizer, articleService, tableContentService){
      this.id = 1476738850;
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
