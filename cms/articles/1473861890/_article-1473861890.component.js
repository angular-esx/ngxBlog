import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  CODE_PANEL_DIRECTIVES,
  HIGHLIGHT_DIRECTIVES
} from 'xblog-cores/components';
import { cmsArticleService } from '../../cores/services';

function _article1473861890Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,

    function article1473861890Component(sanitizer, articleService){
      this.id = 1473861890;
      this.sanitizer = sanitizer;
      this.articleService = articleService;

      this.myAppLink = '#';

      this.codeBlock = this.getCodeBlock('code-block.html');
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
