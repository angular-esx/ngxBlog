import {
  Component,
  ElementRef,
  Renderer,
  ChangeDetectionStrategy
} from '@angular/core';

import { ngxBaseComponent } from 'ngx-framework/cores';

export var xblogCodePanelComponent = Component({
  selector: 'xblog-code-panel',
  templateUrl: './templates/code-panel.html',
  styleUrls: ['./styles/code-panel.scss'],
  inputs: [ 'type' ],
  host: {
    '[class.xblog-code-panel]': 'true'
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

  getPrefixClass: function(){
    return 'xblog-code-panel';
  }
});