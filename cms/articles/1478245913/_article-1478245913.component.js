import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1478245913Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1478245913.html',
  host: {
    '[class.xblog-article-1478245913]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1478245913;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      webAnimationLink: 'https://w3c.github.io/web-animations',
      featWebAnimationLink: 'http://caniuse.com/#feat=web-animation',
      webAnimationPolyfillLink: 'https://github.com/web-animations/web-animations-js',
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'basic-transition', name: 'Basic transition' },
      { id: 'enter-leave-transition', name: 'Enter-Leave transition' },
      { id: 'auto-property-calc', name: 'Automatic property calculation' },
      { id: 'multi-step-animations', name: 'Multi-step animations' },
      { id: 'parallel-animations', name: 'Parallel animations' }
    ])
    .addSubHeadings([
      { headingId: 'basic-transition', id: 'triggers', name: 'Triggers' },
      { headingId: 'basic-transition', id: 'states', name: 'States' },
      { headingId: 'basic-transition', id: 'transitions', name: 'Transitions' },
      { headingId: 'basic-transition', id: 'attach-animations', name: 'Attach animations' },
      { headingId: 'enter-leave-transition', id: 'wildcard-state', name: 'Wildcard state' },
      { headingId: 'enter-leave-transition', id: 'void-state', name: 'Void state' },
    ])
    .build();

    this.basicTransition = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'basic-transition')
      },
      codeBlocks: {
        1: this.getCodeBlock('basic-transition-1.html'),
        2: this.getCodeBlock('basic-transition-2.html'),
        3: this.getCodeBlock('basic-transition-3.html'),
        4: this.getCodeBlock('basic-transition-4.html'),
        5: this.getCodeBlock('basic-transition-5.html'),
        6: this.getCodeBlock('basic-transition-6.html'),
        7: this.getCodeBlock('basic-transition-7.html'),
      }
    };

    this.enterLeaveTransition = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'enter-leave-transition')
      },
      codeBlocks: {
        1: this.getCodeBlock('enter-leave-transition.html'),
      }
    };

    this.autoPropertyCalc = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'automatic-property-calculation')
      },
      codeBlocks: {
        1: this.getCodeBlock('automatic-property-calculation.html'),
      }
    };

    this.multiStepAnimations = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'multi-step-animations')
      },
      codeBlocks: {
        1: this.getCodeBlock('multi-step-animations.html'),
      }
    };

    this.parallelAnimations = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'parallel-animations')
      },
      codeBlocks: {
        1: this.getCodeBlock('parallel-animations.html'),
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
  