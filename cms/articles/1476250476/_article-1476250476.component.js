import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1476250476Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1476250476.html',
  host: {
    '[class.xblog-article-1476250476]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1476250476;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng-zone', name: 'ngZone in Angular 2' },
      { id: 'change-detection-on-push', name: 'ChangeDetectionStrategy.OnPush' },
      { id: 'immutable-objects', name: 'Immutable objects' },
      { id: 'asynchronous-actions', name: 'Asynchronous actions' }
    ])
    .build();

    this.references = {
      BrianPageLink: 'https://twitter.com/briantford',
      zoneVideoLink: 'https://www.youtube.com/watch?v=3IqtmUscE_U',
      immutableLink: 'https://facebook.github.io/immutable-js/'
    };

    this.ngZone = {
      codeBlocks: {
        1: this.getCodeBlock('ng-zone-1.html'),
        2: this.getCodeBlock('ng-zone-2.html')
      }
    }; 

    this.onPush = {
      sourceCode: {
        name: 'child.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'on-push')
      },
      codeBlocks: {
        1: this.getCodeBlock('on-push-1.html'),
        2: this.getCodeBlock('on-push-2.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('onPush-example-1-1476250476.png'),
        2: resourceUtils.getImg('onPush-example-2-1476250476.png')
      }
    }; 

    this.immutable = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'immutable')
      },
      codeBlocks: {
        1: this.getCodeBlock('immutable-1.html'),
        2: this.getCodeBlock('immutable-2.html')
      }
    };

    this.changeDetectorRef = {
      sourceCode: {
        name: 'child.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'change-detector-ref')
      },
      codeBlocks: {
        1: this.getCodeBlock('change-detector-ref-1.html'),
        2: this.getCodeBlock('change-detector-ref-2.html')
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
  