import * as ngCore from '@angular/core';
import { RouterLink } from '@angular/router-deprecated';

import { ngxBaseComponent, ngxUtils } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

function _postComponent(){
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor =  [
    ngCore.ElementRef,
    ngCore.Renderer,

    function postComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.ngOnChanges = function(changeRecord){
    this.validate();

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  };

  this.ngOnInit = function(){
    this.validate();

    _getBaseInstance(this).ngOnInit.apply(this);
  };

  this.initDefaultValues = function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'large';
      _changeRecord = this.buildChangeRecord(_styleProperties.SIZE, this.size);
     }

     return _changeRecord;
  };

  this.getPrefixClass = function(){
    return 'xblog-post';
  };

  this.getRouteLink = function(){
    //return postPage.getRouteLink(this.model.id, this.model.title);
  };

  this.validate = function(){
    if(ngxUtils.isEmpty(this.model.id)){ throw 'A article must have id'; }

    if(ngxUtils.isEmpty(this.model.title)){ throw 'A article must have title'; }

    if(ngxUtils.isEmpty(this.model.description)){ throw 'A article must have description'; }

    if(ngxUtils.isEmpty(this.model.postedDate)){ throw 'A article must have postedDate'; }
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var postComponent = ngCore.Component({
  selector: 'xblog-post',
  templateUrl: './templates/post.html',
  styleUrls: ['./styles/post.scss'],
  directives: [ 
    RouterLink,
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'size', 'model' ],
  host: {
    '[class.xblog-post]': 'true'
  }
})
.Class(new _postComponent());