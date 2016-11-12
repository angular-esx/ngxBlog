import { 
  Class,
  Component,
  ElementRef,
  Renderer,
 } from '@angular/core';

import {
  ngxNavbarComponentMetadata as originNgxNavbarComponentMetadata, 
  ngxNavbarComponent as originNgxNavbarComponent
} from 'ngx-framework/modules';

var _ngxNavbarComponentMetadata = Class({
  extends: originNgxNavbarComponentMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxNavbarComponentMetadata(){
    originNgxNavbarComponentMetadata.apply(this);

    Object.assign(this, {
      styleUrls: ['./styles/index.scss']
    });
  }
});

export var ngxNavbarComponent = Component(new _ngxNavbarComponentMetadata())
.Class({
  extends: originNgxNavbarComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_VENDORS_ngxNavbarComponent(elementRef, renderer) {
      originNgxNavbarComponent.apply(this, arguments);
    }
  ],
});