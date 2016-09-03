import * as ngCore from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    ActivatedRoute,
    articleService,

    function articlePage(activatedRoute, articleService){
      this.activatedRoute = activatedRoute;
      this.articleService = articleService;
    }
  ];

  this.ngOnInit = function(){
    var _self = this;

    this.subscription = this.activatedRoute.params.subscribe(function(params) {
      _self.article = _self.articleService.getArticle(params.id.split('-').pop().replace('.html', ''));
    });
  };

  this.ngOnDestroy = function(){
    this.subscription.unsubscribe();
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