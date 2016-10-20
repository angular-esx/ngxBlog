import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ngxComponentPortal } from 'ngx-framework/cores';

import { xblogArticleService } from './services/article.service';


export var xblogArticlePage = Component({
  selector: 'xblog-article',
  templateUrl: './templates/article.html',
  styleUrls: ['./styles/article.scss'],
  host: {
    '[class.xblog-article]': 'true'
  }
})
.Class({
  constructor: [
    ActivatedRoute,
    xblogArticleService,

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