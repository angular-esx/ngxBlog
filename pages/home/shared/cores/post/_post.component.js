import { 
  Class,
  Component,
  ElementRef,
  Renderer
} from '@angular/core';

import {
  xblogPostComponentMetadata as originXblogPostComponentMetadata,
  xblogPostComponent as originXblogPostComponent
} from 'xblog-cores/modules';


var _xblogPostComponentMetadata = Class({
  extends: originXblogPostComponentMetadata,

  constructor: function HOME_SHARED_CORES_xblogPostComponentMetadata(){
    originXblogPostComponentMetadata.apply(this);

    Object.assign(this, {
      styleUrls: ['./styles/index.scss']
    });
  }
});

export var xblogPostComponent = Component(new _xblogPostComponentMetadata())
.Class({
  extends: originXblogPostComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_CORES_xblogPostComponent(elementRef, renderer) {
      originXblogPostComponent.apply(this, arguments);
    }
  ],
});