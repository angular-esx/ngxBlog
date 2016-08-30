import * as ngCore from '@angular/core';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { 
  //NAVBAR_DIRECTIVES, 
  FOOTER_DIRECTIVES
} from '../cores/components';

function _application (){
  this.constructor = function application(){};
}

export var application = ngCore.Component({
  selector: 'xblog',
  template: [
    // '<xblog-navbar></xblog-navbar>',
    '<router-outlet></router-outlet>',
    // '<xblog-footer></xblog-footer>'
  ].join(''),
  directives: [ 
    ROUTER_DIRECTIVES,
    // NAVBAR_DIRECTIVES,
    //FOOTER_DIRECTIVES
  ],
  providers: [ ROUTER_PROVIDERS ]
})
.Class(new _application());