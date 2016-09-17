import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  CODE_PANEL_DIRECTIVES,
  HIGHLIGHT_DIRECTIVES
} from 'xblog-cores/components';
import { resourceUtils } from 'xblog-cores/utils';
import { cmsArticleService } from '../../cores/services';

function _article1473861890Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,

    function article1473861890Component(sanitizer, articleService){
      this.id = 1473861890;
      this.sanitizer = sanitizer;
      this.articleService = articleService;

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
    }
  ];

  this.getCodeBlock = function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  };
}

export var article1473861890Component = ngCore.Component({
  selector: 'article',
  templateUrl: './templates/article-1473861890.html',
  styleUrls: ['./styles/article-1473861890.scss'],
  directives: [ 
    NGX_GRID_DIRECTIVES,
    CODE_PANEL_DIRECTIVES,
    HIGHLIGHT_DIRECTIVES
  ],
  host: {
    '[class.xblog-article-1473861890]': 'true'
  }
})
.Class(new _article1473861890Component());
