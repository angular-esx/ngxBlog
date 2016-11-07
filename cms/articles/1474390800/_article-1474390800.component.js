import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1474390800Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1474390800.html',
  host: {
    '[class.xblog-article-1474390800]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1474390800;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      DIArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'understanding-the-problem', name: 'Understanding the problem' },
      { id: 'forward-references', name: 'Forward references' }
    ])
    .build();

    this.forwardRef = {
      sourceCode: {
        name: 'forward-references',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'forward-references')
      },
      codeBlocks: {
        1: this.getCodeBlock('forward-references-1.html'),
        2: this.getCodeBlock('forward-references-2.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('forwardReferences-example-1-1474390800.png')
      }
    };
  },

  getCodeBlock: function(fileName, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  