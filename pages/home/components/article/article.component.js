import * as ngCore from '@angular/core';
//import { RouterLink } from '@angular/router-deprecated';

import { ngxUtils } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

function _homeArticleComponent(){
  this.constructor = function homeArticleComponent(){};

  this.ngOnChanges = function(changeRecord){
    this.validate();
  };

  this.ngOnInit = function(){
    this.validate();
  };

  this.getCreatedDate = function(){
    return this.model.createdDate;
  };

  this.getRouteLink = function(){
    //return postPage.getRouteLink(this.model.id, this.model.title);
  };

  this.validate = function(){
    if(ngxUtils.isEmpty(this.model.id)){ throw 'A article must have id'; }

    if(ngxUtils.isEmpty(this.model.title)){ throw 'A article must have title'; }

    if(ngxUtils.isEmpty(this.model.content)){ throw 'A article must have content'; }

    if(ngxUtils.isEmpty(this.model.createdDate)){ throw 'A article must have createdDate'; }
  };
}

export var homeArticleComponent = ngCore.Component({
  selector: 'xblog-home-article',
  templateUrl: './templates/article.html',
  styleUrls: ['./styles/article.scss'],
  directives: [ 
    //RouterLink,
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'model' ],
  host: {
    '[class.xblog-home-article]': 'true'
  }
})
.Class(new _homeArticleComponent());