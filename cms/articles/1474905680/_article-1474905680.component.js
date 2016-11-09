import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1474905680Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1474905680.html',
  host: {
    '[class.xblog-article-1474905680]': 'true'
  }
})
  .Class({
    constructor: [
      DomSanitizer,
      cmsArticleService,
      xblogTableContentService,

      function article1474905680Component(sanitizer, articleService, tableContentService) {
        this.id = 1474905680;
        this.sanitizer = sanitizer;
        this.articleService = articleService;
        this.tableContentService = tableContentService;
      }
    ],

    ngOnInit: function () {
      this.tableContents = this.tableContentService
        .getBuilder()
        .addHeadings([
          { id: 'interpolation', name: 'Interpolation' },
          { id: 'template-expressions', name: 'Template expressions' },
          { id: 'template-statements', name: 'Template statements' },
          { id: 'template-reference-variables', name: 'Template reference variables' },
          { id: 'template-expression-operators', name: 'Template expression operators' }
        ])
        .addSubHeadings([
          { headingId: 'template-expressions', id: 'expression-context', name: 'Expression context' },
          { headingId: 'template-expressions', id: 'expression-guidelines', name: 'Expression guidelines' },
          { headingId: 'template-statements', id: 'statement-context', name: 'Statement context' },
          { headingId: 'template-statements', id: 'statement-guidelines', name: 'Statement guidelines' },
          { headingId: 'template-expression-operators', id: 'the-pipe-operator', name: 'The pipe operator ( | )' },
          { headingId: 'template-expression-operators', id: 'the-safe-navigation-operator', name: 'The safe navigation operator ( ?. )' }
        ])
        .build();

      this.interpolation = {
        codeBlocks: {
          1: this.getCodeBlock('interpolation.html'),
        }
      };

      this.templateRefVariable = {
        sourceCode: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'template-ref-variable/example.component.js')
        },
        codeBlocks: {
          1: this.getCodeBlock('template-ref-variable.html'),
        },
        screenCaptures: {
          1: resourceUtils.getImg('templateRefVariable-example-1474905680.png')
        }
      };

      this.pipeOperator = {
        codeBlocks: {
          1: this.getCodeBlock('pipe-operator-1.html'),
          2: this.getCodeBlock('pipe-operator-2.html'),
          3: this.getCodeBlock('pipe-operator-3.html'),
        },
        references: {
          pipeArticle: '#'
        }
      };

      this.safeNavOperator = {
        sourceCode: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'safe-nav-operator/example.component.js')
        },
        codeBlocks: {
          1: this.getCodeBlock('safe-nav-operator.html'),
        }
      };
    },

    getCodeBlock: function (fileName) {
      var _codeBlock = this.articleService.getCodeBlock(this.id, fileName);
      _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
      return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
    }
  });
