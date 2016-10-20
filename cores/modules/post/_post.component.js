import {
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent, ngxUtils } from 'ngx-framework/cores';

export var xblogPostComponent = Component({
  selector: 'xblog-post',
  templateUrl: './templates/post.html',
  styleUrls: ['./styles/post.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [ 'size', 'model' ],
  host: {
    '[class.xblog-post]': 'true'
  }
})
.Class({
  extends: ngxBaseComponent,

  constructor: [
    ElementRef,
    Renderer,

    function (elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  ngOnChanges: function(changeRecord){
    this.validate();

    ngxBaseComponent.prototype.ngOnChanges.apply(this, arguments);
  },

  ngOnInit: function(){
    this.validate();

    ngxBaseComponent.prototype.ngOnInit.apply(this);
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