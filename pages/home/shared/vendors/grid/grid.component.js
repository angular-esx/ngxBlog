import { 
  Class,
  Component,
  ElementRef,
  Renderer,
 } from '@angular/core';

import {
  ngxGridComponentMetadata as originNgxGridComponentMetadata, 
  ngxGridComponent as originNgxGridComponent
} from 'ngx-framework/modules';

var _ngxGridComponentMetadata = Class({
  extends: originNgxGridComponentMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxGridComponentMetadata(){
    originNgxGridComponentMetadata.apply(this);

    Object.assign(this, {
      styles: [":host(.ngx-grid){display:block;margin-left:auto;margin-right:auto;padding-left:.9375rem;padding-right:.9375rem;box-sizing:border-box}:host(.ngx-grid) /deep/ .ngx-grid-row{display:flex;flex-wrap:wrap;margin-left:-.9375rem;margin-right:-.9375rem;box-sizing:border-box}:host(.ngx-grid) /deep/ .ngx-grid-col{position:relative;min-height:1px;padding-left:.9375rem;padding-right:.9375rem;box-sizing:border-box;overflow:hidden}:host(.ngx-grid) /deep/ .ngx-grid-col.ngx-grid-col-xs-size-12{flex:0 0 100%}@media (min-width: 992px){:host(.ngx-grid) /deep/ .ngx-grid-col.ngx-grid-col-lg-size-8{flex:0 0 66.66667%}}:host(.ngx-grid) /deep/ .ngx-grid-col.ngx-grid-col-xs-offset-1{margin-left:0%}@media (min-width: 992px){:host(.ngx-grid) /deep/ .ngx-grid-col.ngx-grid-col-lg-offset-3{margin-left:16.66667%}}"]
    });
  }
});

export var ngxGridComponent = Component(new _ngxGridComponentMetadata())
.Class({
  extends: originNgxGridComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_VENDORS_ngxGridComponent(elementRef, renderer) {
      originNgxGridComponent.apply(this, arguments);
    }
  ],
});