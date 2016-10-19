import { Component } from '@angular/core';

import { xblogHomeService } from './services/home.service';

export var xblogHomePage = Component({
  selector: 'xblog-home',
  template: "<xblog-header cover=\"blog/resources/images/xblog-home-cover.jpg\"><h1 xblog-title>$ngx</h1><hr xblog-divider><xblog-subtitle>This is a blog for $ngx</xblog-subtitle></xblog-header><ngx-grid type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"xs-12 lg-8\" offset=\"xs-1 lg-3\"><xblog-post *ngFor=\"let post of posts\" [model]=\"post\"></xblog-post></ngx-grid-col></ngx-grid-row></ngx-grid>",
  styles: [":host(.xblog-home)>.xblog-header{margin:67px 0 2.5rem}"],
  host: {
    '[class.xblog-home]': 'true'
  }
})
.Class({
  constructor: [
    xblogHomeService,

    function (homeService){
      this.homeService = homeService;
    }
  ],

  ngOnInit: function(){
    this.posts = this.homeService.getPosts();
  }
});