import { 
  Class,
  Component,
  ElementRef,
  Renderer,
 } from '@angular/core';

import {
  ngxCardComponentMetadata as originNgxCardComponentMetadata, 
  ngxCardComponent as originNgxCardComponent
} from 'ngx-framework/modules';

var _ngxCardComponentMetadata = Class({
  extends: originNgxCardComponentMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxCardComponentMetadata(){
    originNgxCardComponentMetadata.apply(this);

    Object.assign(this, {
      styles: [":host(.ngx-card){display:block;position:relative;padding:1.25rem;border:1px solid;border-radius:.25rem}:host(.ngx-card) /deep/ ngx-card-title{display:block;margin:0 0 0.75rem 0}:host(.ngx-card) /deep/ ngx-card-subtitle{display:block;margin:calc(.75rem / -2) 0 0.75rem 0}:host(.ngx-card) /deep/>.ngx-card-header{display:flex}:host(.ngx-card) /deep/>.ngx-card-header>.ngx-card-header-content{min-width:1px;flex:1}:host(.ngx-card) /deep/>.ngx-card-header>ngx-card-actions{padding-left:10px}:host(.ngx-card) /deep/>ngx-card-content{display:block}:host(.ngx-card) /deep/>ngx-card-content>*:last-child{margin-bottom:0}:host(.ngx-card).ngx-card-color-secondary{color:#383b3d;background-color:#fff;border-color:#ccc}:host(.ngx-card).ngx-card-color-secondary /deep/ ngx-card-subtitle{color:rgba(56,59,61,0.65)}"]
    });
  }
});

export var ngxCardComponent = Component(new _ngxCardComponentMetadata())
.Class({
  extends: originNgxCardComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_VENDORS_ngxCardComponent(elementRef, renderer) {
      originNgxCardComponent.apply(this, arguments);
    }
  ],
});