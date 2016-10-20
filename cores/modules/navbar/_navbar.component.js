import { 
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

export var xblogNavbarComponent = Component({
  selector: 'xblog-navbar',
  templateUrl: './templates/navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xblog-navbar]': 'true'
  }
})
.Class({
  constructor: function(){}
});