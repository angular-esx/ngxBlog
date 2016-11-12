import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1473861890Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1473861890.html',
  host: {
    '[class.xblog-article-1473861890]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1473861890;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ngOnChanges', name: 'ngOnChanges' },
      { id: 'ngOnInit', name: 'ngOnInit' },
      { id: 'ngDoCheck', name: 'ngDoCheck' },
      { id: 'ngAfterContent', name: 'ngAfterContent' },
      { id: 'ngAfterView', name: 'ngAfterView' },
      { id: 'ngOnDestroy', name: 'ngOnDestroy' }
    ])
    .build();

    this.ngOnChanges = {
      sourceCode: {
        exampleComponent: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-changes/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngOnChanges-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock('ng-on-changes.html')
      }
    };

    this.ngOnInit = {
      sourceCode: {
        childComponent: {
          name: 'child.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngOnInit-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock('ng-on-init.html')
      }
    };

    this.ngDoCheck = {
      sourceCode: {
        childComponent: {
          name: 'child.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-do-check/child.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngDoCheck-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock('ng-do-check.html')
      }
    };

    this.ngAfterContent = {
      sourceCode: {
        childComponent: {
          name: 'child.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/child.component.js')
        },
        exampleComponent: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngAfterContent-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock('ng-after-content-1.html'),
        2: this.getCodeBlock('ng-after-content-2.html')
      }
    };

    this.ngAfterView = {
      sourceCode: {
        exampleComponent: {
          name: 'example.component.js',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-view/example.component.js')
        }
      },
      screenCaptures: {
        1: resourceUtils.getImg('ngAfterView-example-1473861890.png')
      },
      codeBlocks: {
        1: this.getCodeBlock('ng-after-view.html')
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
