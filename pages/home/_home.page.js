import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HOMEPAGE_PAGE_SIZE as PAGE_SIZE } from 'xblog-cores/constants';

import { xblogHomeService } from './services/home.service';


export var xblogHomePage = Component({
  selector: 'xblog-home',
  templateUrl: './templates/home.html',
  styleUrls: ['./styles/index.scss'],
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
      _self.posts = _self.homeService.getPosts(params.pageNum || 1, PAGE_SIZE);
    });
  }
});