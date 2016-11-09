import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1476538850Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1476538850.html',
  host: {
    '[class.xblog-article-1476538850]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1476538850;
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
  }
});
