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
      styleUrls: ['./styles/index.scss']
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