import * as ngCore from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

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
  template: "<ngx-card><ngx-card-header><ngx-card-title><a [routerLink]=\"[model.routeLink]\"><p>{{model.title}}</p></a></ngx-card-title><ngx-card-subtitle>Posted on {{model.postedDate}}</ngx-card-subtitle><ngx-card-text><p>{{model.description}}</p></ngx-card-text></ngx-card-header></ngx-card>",
  styles: [":host(.xblog-post){display:block;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-post) .ngx-card{border-radius:0;border:none}:host(.xblog-post) .ngx-card ngx-card-title>a{font-weight:800;text-decoration:none;color:#333}:host(.xblog-post) .ngx-card ngx-card-title>a:focus,:host(.xblog-post) .ngx-card ngx-card-title>a:hover{color:#5cb75c}:host(.xblog-post) .ngx-card ngx-card-title>a>p{margin:0;overflow:hidden}:host(.xblog-post) .ngx-card ngx-card-subtitle{font-style:italic}:host(.xblog-post) .ngx-card ngx-card-text>p{overflow:hidden;max-height:3em}:host(.xblog-post).xblog-post-size-large ngx-card-title>a{font-size:1.75rem}:host(.xblog-post).xblog-post-size-large ngx-card-title>a>p{white-space:nowrap;text-overflow:ellipsis}:host(.xblog-post).xblog-post-size-large ngx-card-subtitle{font-size:.875rem}:host(.xblog-post).xblog-post-size-small>.ngx-card ngx-card-title{display:flex;align-items:center;height:3em;margin:0}:host(.xblog-post).xblog-post-size-small>.ngx-card ngx-card-title>a{font-size:1.25rem}:host(.xblog-post).xblog-post-size-small>.ngx-card ngx-card-subtitle{font-size:.75rem}:host(.xblog-post).xblog-post-size-small>.ngx-card ngx-card-text>p{font-size:.875rem}"],
  directives: [ 
    ROUTER_DIRECTIVES,
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'size', 'model' ],
  host: {
    '[class.xblog-post]': 'true'
  }
})
.Class(new _postComponent());