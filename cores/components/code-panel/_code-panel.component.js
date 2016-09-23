import * as ngCore from '@angular/core';

import { ngxBaseComponent } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

function _codePanelComponent(){
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor =  [
    ngCore.ElementRef,
    ngCore.Renderer,

    function codePanelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function(){
    return 'xblog-code-panel';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var codePanelComponent = ngCore.Component({
  selector: 'xblog-code-panel',
  templateUrl: './templates/code-panel.html',
  styleUrls: ['./styles/code-panel.scss'],
  directives: [ 
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'lang', 'type' ],
  host: {
    '[class.xblog-code-panel]': 'true'
  }
})
.Class(new _codePanelComponent());