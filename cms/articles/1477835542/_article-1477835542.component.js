import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1477835542Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477835542.html',
  host: {
    '[class.xblog-article-1477835542]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1477835542;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      templateDrivenFormsArticleLink: '#',
      customFormValidatorsArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'form-group-n-form-control', name: 'FormGroup and FormControl' },
      { id: 'form-group-n-form-group-name-n-form-control-name', name: 'formGroup & formGroupName & formControlName' },
      { id: 'form-builder', name: 'FormBuilder' },
      { id: 'validators', name: 'Validators' },
      { id: 'handle-changed-value-with-form-control', name: 'Handle changed value with formControl' }
    ])
    .build();

    this.reactiveForms = {
      sourceCode: {
        name: 'reactive-forms',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'reactive-forms')
      },
      codeBlocks: {
        1: this.getCodeBlock('reactive-form-1.html'),
        2: this.getCodeBlock('reactive-form-2.html'),
        3: this.getCodeBlock('reactive-form-3.html'),
        4: this.getCodeBlock('reactive-form-4.html'),
        5: this.getCodeBlock('reactive-form-5.html'),
        6: this.getCodeBlock('form-builder.html'),
        7: this.getCodeBlock('form-validators-1.html'),
        8: this.getCodeBlock('form-validators-2.html'),
        9: this.getCodeBlock('form-control-1.html'),
        10: this.getCodeBlock('form-control-2.html')
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
  