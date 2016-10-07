import * as ngCore from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ngxBaseComponent, ngxUtils } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

export var postComponent = ngCore.Component({
  selector: 'xblog-post',
  templateUrl: './templates/post.html',
  styleUrls: ['./styles/post.scss'],
  directives: [ 
    ROUTER_DIRECTIVES,
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'size', 'model' ],
  host: {
    '[class.xblog-post]': 'true'
  }
})
.Class({
  extends: ngxBaseComponent,
  constructor: [
    ngCore.ElementRef,
    ngCore.Renderer,

    function (elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  ngOnChanges: function(changeRecord){
    this.validate();

    _getBaseInstance(this).ngOnChanges.apply(this, arguments);
  },

  ngOnInit: function(){
    this.validate();

    _getBaseInstance(this).ngOnInit.apply(this);
  },

  initDefaultValues: function(){
    var _styleProperties = this.getStyleProperties(),
        _changeRecord;

    if (ngxUtils.isEmpty(this.size)) {
      this.size = 'large';
      _changeRecord = this.buildChangeRecord(_styleProperties.SIZE, this.size);
     }

     return _changeRecord;
  },

  getPrefixClass: function(){
    return 'xblog-post';
  },

  validate: function(){
    if(ngxUtils.isEmpty(this.model.id)){ throw 'A article must have id'; }

    if(ngxUtils.isEmpty(this.model.title)){ throw 'A article must have title'; }

    if(ngxUtils.isEmpty(this.model.description)){ throw 'A article must have description'; }

    if(ngxUtils.isEmpty(this.model.postedDate)){ throw 'A article must have postedDate'; }
  }
});

function _getBaseInstance(context){ 
  return context.getBaseInstance(ngxBaseComponent);
}