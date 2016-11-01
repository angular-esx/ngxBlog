import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HOMEPAGE_PAGE_SIZE as PAGE_SIZE } from 'xblog-cores/constants';

import { xblogHomeService } from './services/home.service';


export var xblogHomePage = Component({
  selector: 'xblog-home',
  template: "<xblog-navbar></xblog-navbar><xblog-header cover=\"blog/resources/images/xblog-home-cover.jpg\"><h1 xblog-title>$ngx</h1><hr xblog-divider><xblog-subtitle>This is a blog for $ngx</xblog-subtitle></xblog-header><ngx-grid type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"xs-12 lg-8\" offset=\"xs-1 lg-3\"><xblog-post *ngFor=\"let post of (posts$ | async)\" [model]=\"post\"></xblog-post></ngx-grid-col></ngx-grid-row></ngx-grid><xblog-footer></xblog-footer>",
  styles: [":host(.xblog-home)>.xblog-header{margin:67px 0 2.5rem}"],
  host: {
    '[class.xblog-home]': 'true'
  }
})
.Class({
  constructor: [
    ActivatedRoute,
    xblogHomeService,

    function xblogHomePage(activatedRoute, homeService){
      this.activatedRoute = activatedRoute;
      this.homeService = homeService;
    }
  ],

  ngOnInit: function(){
    var _self = this;

    this.subscription = this.activatedRoute.params.subscribe(function(params) {
      _self.posts$ = _self.homeService.getPosts$(params.pageNum || 1, PAGE_SIZE);
    });
  }
});