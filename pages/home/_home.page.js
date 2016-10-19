import { Component } from '@angular/core';

import { xblogHomeService } from './services/home.service';

export var xblogHomePage = Component({
  selector: 'xblog-home',
  templateUrl: './templates/home.html',
  styleUrls: ['./styles/home.scss'],
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