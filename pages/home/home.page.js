import * as ngCore from '@angular/core';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  HEADER_DIRECTIVES,
  POST_DIRECTIVES
} from '../../cores/components';

function _homePage(){
  this.constructor = function homePage(){};

  this.ngOnInit = function(){
    this.posts = [];

    for (var i = 0; i < 10; i++) {
      this.posts.push(_createPost(i));
    }
  };

  function _createPost(id){
    return {
      id: id,
      title: 'Failure is not an option ' + id,
      description: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      postedDate: new Date(),
      routeName: 'Article'
    };
  }
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