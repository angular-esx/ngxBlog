import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';

export var article1475436850Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1475436850.html',
  host: {
    '[class.xblog-article-1475436850]': 'true'
  }
})
  .Class({
    constructor: [
      DomSanitizer,
      cmsArticleService,
      xblogTableContentService,

      function article1475436850Component(sanitizer, articleService, tableContentService) {
        this.id = 1475436850;
        this.sanitizer = sanitizer;
        this.articleService = articleService;
        this.tableContentService = tableContentService;
      }
    ],

    ngOnInit: function () {
      this.tableContents = this.tableContentService
        .getBuilder()
        .addHeadings([
          { id: 'my-heading', name: 'My heading' }
        ])
        .addSubHeadings([
          { headingId: 'my-heading', id: 'my-subheading', name: 'My subheading' },
        ])
        .build();

      this.templateServices = {
        sourceCode: {
          name: 'template-services',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'template-services')
        },
        codeBlocks: {
          1: this.getCodeBlock('1.html'),
          2: this.getCodeBlock('2.html'),
          3: this.getCodeBlock('3.html')
        }
      };
    },

    getCodeBlock: function (fileName, lang) {
      var _langs = lang ? [lang] : ['javascript', 'html', 'css'];

      var _codeBlock = this.articleService.getCodeBlock(this.id, fileName);
      _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

      return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
    }
  });
