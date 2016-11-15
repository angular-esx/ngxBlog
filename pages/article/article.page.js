import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ngxComponentPortal } from 'ngx-framework/cores';

import { xblogArticleService } from './services/article.service';


export var xblogArticlePage = Component({
  selector: 'xblog-article',
  template: "<xblog-navbar></xblog-navbar><xblog-header [cover]=\"article.cover\"><h1 xblog-title>{{article.title}}</h1><hr xblog-divider><xblog-subtitle>{{article.postedDate | date:\"fullDate\"}}</xblog-subtitle></xblog-header><ngx-grid class=\"xblog-article-content-section\" type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"xs-12 lg-8\" offset=\"xs-1 lg-3\"><template [ngx-portal-host]=\"contentComponent\"></template></ngx-grid-col></ngx-grid-row></ngx-grid><h2 *ngIf=\"hasRelatedArticles()\" class=\"xblog-article-related-posts-section-title\">Related Articles</h2><ngx-grid *ngIf=\"hasRelatedArticles()\" class=\"xblog-article-related-posts-section\" type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"lg-10\" offset=\"lg-2\"><ngx-grid-row><ngx-grid-col class=\"xblog-article-related-post-container\" *ngFor=\"let relatedArticle of article.relatedArticles\" size=\"xs-12 sm-6 xl-4\"><xblog-post size=\"small\" [model]=\"relatedArticle\"></xblog-post></ngx-grid-col></ngx-grid-row></ngx-grid-col></ngx-grid-row></ngx-grid><xblog-footer></xblog-footer>",
  styles: [":host(.xblog-article)>.xblog-header{margin:54px 0 2.5rem}:host(.xblog-article) /deep/>.xblog-article-content-section{margin:5rem 0}:host(.xblog-article) /deep/>.xblog-article-content-section p{margin:0}:host(.xblog-article) /deep/>.xblog-article-content-section .section-heading{font-size:1.75rem;font-weight:800;margin:1rem 0}:host(.xblog-article) /deep/>.xblog-article-content-section .section-subheading{font-size:1.5rem;font-weight:800;margin:1rem 0;color:#818b92}:host(.xblog-article) /deep/>.xblog-article-content-section .section-subject{font-size:1.25rem;font-weight:600;margin:1rem 0;color:#818b92;text-decoration:underline}:host(.xblog-article) /deep/>.xblog-article-content-section .screen-capture{text-align:center;overflow-x:auto}:host(.xblog-article)>.xblog-article-related-posts-section-title{text-align:center}:host(.xblog-article)>.xblog-article-related-posts-section{margin:3rem 0}:host(.xblog-article)>.xblog-article-related-posts-section .xblog-article-related-post-container{padding:.9375rem}"],
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
      _self.articleService
      .getArticle$(params.id.split('-').pop().replace('.html', ''))
      .subscribe(function(article){
        _self.article = article;
        _self.contentComponent = new ngxComponentPortal(article.content);
      });
    });
  },

  ngOnDestroy: function(){
    this.subscription.unsubscribe();
  },

  hasRelatedArticles: function(){
    return this.article.relatedArticles.length > 0;
  }
});