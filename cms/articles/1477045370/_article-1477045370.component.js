import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1477045370Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477045370.html',
  host: {
    '[class.xblog-article-1477045370]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1477045370;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      modelDrivenFormsArticleLink: '#',
      componentArticleLink: '#',
      templateSyntaxArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng-form', name: 'ngForm directive' },
      { id: 'ng-model', name: 'ngModel directive' },
      { id: 'ng-model-group', name: 'ngModelGroup directive' },
      { id: 'track-change-state', name: 'Track change-state' },
      { id: 'ng-submit', name: 'ngSubmit directive' }
    ])
    .build();

    this.templateDrivenForms = {
      sourceCode: {
        name: 'template-driven-forms',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'template-driven-forms')
      },
      codeBlocks: {
        1: this.getCodeBlock('form-template-1.html'),
        2: this.getCodeBlock('form-template-2.html'),
        3: this.getCodeBlock('form-template-3.html'),
        4: this.getCodeBlock('form-template-4.html'),
        5: this.getCodeBlock('form-template-5.html'),
        6: this.getCodeBlock('form-value-1.html', 'json'),
        7: this.getCodeBlock('form-value-2.html', 'json'),
        8: this.getCodeBlock('form-model-group.html')
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
  