import * as ngCore from '@angular/core';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  HEADER_DIRECTIVES,
  POST_DIRECTIVES
} from 'xblog-cores/components';

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
  templateUrl: './templates/home.html',
  styleUrls: ['./styles/home.scss'],
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