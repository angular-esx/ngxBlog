import * as ngCore from '@angular/core';

import { ngxBaseComponent } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

export var codePanelComponent = ngCore.Component({
  selector: 'xblog-code-panel',
  templateUrl: './templates/code-panel.html',
  styleUrls: ['./styles/code-panel.scss'],
  directives: [ 
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'type' ],
  host: {
    '[class.xblog-code-panel]': 'true'
  }
})
.Class({
  extends: ngxBaseComponent,
  constructor: [
    ngCore.ElementRef,
    ngCore.Renderer,

    function (elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ],

  getPrefixClass: function(){
    return 'xblog-code-panel';
  }
});