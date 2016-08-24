import * as ngCore from '@angular/core';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { HEADER_DIRECTIVES } from '../../cores/components';

import { HOME_ARTICLE_DIRECTIVES } from './components';

function _homePage(){
  this.constructor = function homePage(){};

  this.ngOnInit = function(){
    this.articles = [];

    for (var i = 0; i < 10; i++) {
      this.articles.push(_createArticle(i));
    }
  };

  function _createArticle(id){
    return {
      id: id,
      title: 'Failure is not an option ' + id,
      content: 'Many say exploration is part of our destiny, but it’s actually our duty to future generations.',
      createdDate: new Date()
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
    HOME_ARTICLE_DIRECTIVES,
  ],
  host: {
    '[class.xblog-home]': 'true'
  }
})
.Class(new _homePage());