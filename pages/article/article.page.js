import * as ngCore from '@angular/core';

import { 
  NGX_GRID_DIRECTIVES,
  NGX_CARD_DIRECTIVES
} from 'ngx-bootstrap/components';

import { 
  HEADER_DIRECTIVES,
  POST_DIRECTIVES 
} from '../../cores/components';

import { articleService } from './services/article.service';

function _articlePage(){
  this.constructor = [
    articleService,

    function articlePage(articleService){
      this.articleService = articleService;
    }
  ];

  this.ngOnInit = function(){
    this.article = this.articleService.getArticle();
  };
}

export var articlePage = ngCore.Component({
  selector: 'xblog-article',
  templateUrl: './templates/article.html',
  styleUrls: ['./styles/article.scss'],
  directives: [
    NGX_GRID_DIRECTIVES,
    NGX_CARD_DIRECTIVES,
    HEADER_DIRECTIVES,
    POST_DIRECTIVES
  ],
  providers: [ articleService ],
  host: {
    '[class.xblog-article]': 'true'
  }
})
.Class(new _articlePage());