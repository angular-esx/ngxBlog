import {
  Class,
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent } from 'ngx-framework/cores';


export var xblogCodePanelComponentMetadata = Class({
  constructor: function xblogCodePanelComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-code-panel',
      templateUrl: './templates/code-panel.html',
      styleUrls: ['./styles/index.scss'],
      inputs: [ 'type' ],
      host: {
        '[class.xblog-code-panel]': 'true'
      }
    });
  }
});

export var xblogCodePanelComponent = Component(new xblogCodePanelComponentMetadata())
.Class({
  extends: ngxBaseComponent,
  
  constructor: [
    ElementRef,
    Renderer,

    function xblogCodePanelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  getPrefixClass: function(){
    return 'xblog-code-panel';
  }
});