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
      styleUrls: ['./styles/index.scss']
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