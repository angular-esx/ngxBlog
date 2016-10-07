import * as ngCore from '@angular/core';

import { ngxUtils } from 'ngx-bootstrap/cores';
import { NGX_NAVBAR_DIRECTIVES } from 'ngx-bootstrap/components';

export var navbarComponent = ngCore.Component({
  selector: 'xblog-navbar',
  templateUrl: './templates/navbar.html',
  directives: [ NGX_NAVBAR_DIRECTIVES ],
  host: {
    '[class.xblog-navbar]': 'true'
  }
})
.Class({
  constructor: function(){}
});