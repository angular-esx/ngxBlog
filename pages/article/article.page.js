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
  template: "<xblog-header [cover]=\"article.cover\"><h1 xblog-header-main>{{article.title}}</h1><hr xblog-header-divider><xblog-header-sub>{{article.postedDate}}</xblog-header-sub></xblog-header><ngx-grid class=\"xblog-article-content-section\" type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"md-12 lg-8\" offset=\"md-1 lg-3\"><article [innerHtml]=\"article.content\"></article></ngx-grid-col></ngx-grid-row></ngx-grid><h2 class=\"xblog-article-related-posts-section-title\">Related Articles</h2><ngx-grid class=\"xblog-article-related-posts-section\" type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"lg-10\" offset=\"lg-2\"><ngx-grid-row><ngx-grid-col *ngFor=\"let relatedArticle of article.relatedArticles\" size=\"xs-12 md-6 lg-4\"><xblog-post size=\"small\" [model]=\"relatedArticle\"></xblog-post></ngx-grid-col></ngx-grid-row></ngx-grid-col></ngx-grid-row></ngx-grid>",
  styles: [":host(.xblog-article)>.xblog-article-content-section{margin:5rem 0}:host(.xblog-article)>.xblog-article-related-posts-section-title{text-align:center}:host(.xblog-article)>.xblog-article-related-posts-section{margin:3rem 0}"],
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