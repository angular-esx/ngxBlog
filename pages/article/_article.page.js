import * as ngCore from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { 
  ngxComponentPortal,
  ngxPortalHostDirective
} from 'ngx-bootstrap/cores';
import { 
  NGX_GRID_DIRECTIVES,
  NGX_CARD_DIRECTIVES
} from 'ngx-bootstrap/components';

import { 
  HEADER_DIRECTIVES,
  POST_DIRECTIVES 
} from 'xblog-cores/components';

import { articleService } from './services/article.service';

export var articlePage = ngCore.Component({
  selector: 'xblog-article',
  templateUrl: './templates/article.html',
  styleUrls: ['./styles/article.scss'],
  directives: [
    ngxPortalHostDirective,
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
.Class({
  constructor: [
    ActivatedRoute,
    articleService,

    function articlePage(activatedRoute, articleService){
      this.activatedRoute = activatedRoute;
      this.articleService = articleService;
    }
  ],

  ngOnInit: function(){
    var _self = this;

    this.subscription = this.activatedRoute.params.subscribe(function(params) {
      _self.article = _self.articleService.getArticle(params.id.split('-').pop().replace('.html', ''));
      _self.contentComponent = new ngxComponentPortal(_self.article.content);
    });
  },

  ngOnDestroy: function(){
    this.subscription.unsubscribe();
  },

  hasRelatedArticles: function(){
    return this.article.relatedArticles.length > 0;
  }
});