import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1478094157Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1478094157.html',
  host: {
    '[class.xblog-article-1478094157]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1478094157;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'control-value-accessor', name: 'ControlValueAccessor' },
      { id: 'create-custom-form-control', name: 'Create custom form control' },
      { id: 'register-custom-form-control', name: 'Register custom form control' },
      { id: 'use-custom-form-control', name: 'Use custom control in Angular form' },
    ])
    .build();

    this.controlValueAccessor = {
      codeBlocks: {
        1: this.getCodeBlock('control-value-accessor.html')
      }
    };

    this.customFormControl = {
      codeBlocks: {
        1: this.getCodeBlock('custom-form-control-1.html'),
        2: this.getCodeBlock('custom-form-control-2.html'),
        3: this.getCodeBlock('custom-form-control-3.html'),
        4: this.getCodeBlock('custom-form-control-4.html')
      }
    };

    this.templateDrivenForm = {
      sourceCode: {
        name: 'custom-controls-for-template-driven-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-controls-for-template-driven-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('template-driven-form.html')
      }
    };

    this.reactiveForm = {
      sourceCode: {
        name: 'custom-controls-for-reactive-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-controls-for-reactive-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('reactive-form.html')
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
  