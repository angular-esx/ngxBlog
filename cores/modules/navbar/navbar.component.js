import { 
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

export var xblogNavbarComponent = Component({
  selector: 'xblog-navbar',
  template: "<ngx-navbar color=\"success\" position=\"top\"><div ngx-navbar-brand>$ngx</div></ngx-navbar>",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xblog-navbar]': 'true'
  }
})
.Class({
  constructor: function(){}
});