import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1477889733Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477889733.html',
  host: {
    '[class.xblog-article-1477889733]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1477889733;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'built-in-form-validators', name: 'Built-in form validators' },
      { id: 'custom-form-validator', name: 'Custom form validator' },
      { id: 'custom-form-validator-directive', name: 'Custom form validator directive' },
    ])
    .build();

    this.customValidatorForReactiveForm = {
      sourceCode: {
        name: 'custom-validatorfor-reactive-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validatorfor-reactive-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('custom-validator-for-reactive-form-1.html'),
        2: this.getCodeBlock('custom-validator-for-reactive-form-2.html')
      }
    };

    this.customValidatorForTemplateDrivenForm = {
      sourceCode: {
        name: 'custom-validator-for-template-driven-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validator-for-template-driven-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('custom-validator-for-template-driven-form-1.html'),
        2: this.getCodeBlock('custom-validator-for-template-driven-form-2.html'),
        3: this.getCodeBlock('custom-validator-for-template-driven-form-3.html'),
        4: this.getCodeBlock('custom-validator-for-template-driven-form-4.html')
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
  