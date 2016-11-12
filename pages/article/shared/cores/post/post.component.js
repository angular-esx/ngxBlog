import { 
  Component,
  ElementRef,
  Renderer
} from '@angular/core';

import {
  xblogPostComponentMetadata as originXblogPostComponentMetadata,
  xblogPostComponent as originXblogPostComponent
} from 'xblog-cores/modules';


export var xblogPostComponent = Component(new originXblogPostComponentMetadata())
.Class({
  extends: originXblogPostComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ARTICLE_SHARED_CORES_xblogPostComponent(elementRef, renderer) {
      originXblogPostComponent.apply(this, arguments);
    }
  ],
});