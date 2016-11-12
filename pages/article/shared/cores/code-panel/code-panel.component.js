import { 
  Component,
  ElementRef,
  Renderer
} from '@angular/core';

import {
  xblogCodePanelComponentMetadata as originXblogCodePanelComponentMetadata,
  xblogCodePanelComponent as originXblogCodePanelComponent
} from 'xblog-cores/modules';


export var xblogCodePanelComponent = Component(new originXblogCodePanelComponentMetadata())
.Class({
  extends: originXblogCodePanelComponent,

  constructor: [
    ElementRef,
    Renderer,

    function ARTICLE_SHARED_CORES_xblogCodePanelComponent(elementRef, renderer) {
      originXblogCodePanelComponent.apply(this, arguments);
    }
  ],
});