import * as ngCore from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { 
  NAVBAR_DIRECTIVES, 
  FOOTER_DIRECTIVES
} from '../cores/components';

export var application = ngCore.Component({
  selector: 'xblog',
  template: [
    '<xblog-navbar></xblog-navbar>',
    '<router-outlet></router-outlet>',
    '<xblog-footer></xblog-footer>'
  ].join(''),
  directives: [ 
    ROUTER_DIRECTIVES,
    NAVBAR_DIRECTIVES,
    FOOTER_DIRECTIVES
  ]
})
.Class({
  constructor: function (){}
});