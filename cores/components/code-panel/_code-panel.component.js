import * as ngCore from '@angular/core';

import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

function _codePanelComponent(){
  this.constructor =  function codePanelComponent(){};
}

export var codePanelComponent = ngCore.Component({
  selector: 'xblog-code-panel',
  templateUrl: './templates/code-panel.html',
  styleUrls: ['./styles/code-panel.scss'],
  directives: [ 
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'lang' ],
  host: {
    '[class.xblog-code-panel]': 'true'
  }
})
.Class(new _codePanelComponent());