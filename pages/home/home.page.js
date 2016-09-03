import * as ngCore from '@angular/core';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  HEADER_DIRECTIVES,
  POST_DIRECTIVES
} from '../../cores/components';

import { homeService } from './services/home.service';

function _homePage(){
  this.constructor = [
    homeService,

    function homePage(homeService){
      this.homeService = homeService;
    }
  ];

  this.ngOnInit = function(){
    this.posts = this.homeService.getPosts();
  };
}

export var homePage = ngCore.Component({
  selector: 'xblog-home',
  template: "<xblog-header cover=\"blog/resources/images/xblog-home-cover.jpg\"><h1 xblog-header-main>$ngx</h1><hr xblog-header-divider><xblog-header-sub>This is a blog for $ngx</xblog-header-sub></xblog-header><ngx-grid type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"md-12 lg-8\" offset=\"md-1 lg-3\"><xblog-post *ngFor=\"let post of posts\" [model]=\"post\"></xblog-post></ngx-grid-col></ngx-grid-row></ngx-grid>",
  styles: [":host(.xblog-home)>.xblog-header{margin:67px 0 2.5rem}"],
  directives: [
    NGX_GRID_DIRECTIVES,
    HEADER_DIRECTIVES,
    POST_DIRECTIVES
  ],
  host: {
    '[class.xblog-home]': 'true'
  }
})
.Class(new _homePage());