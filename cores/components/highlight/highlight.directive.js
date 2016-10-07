import * as ngCore from '@angular/core';

export var highlightDirective = ngCore.Directive({
  selector: '[xblog-highlight]',
  host: {
    '[class.xblog-highlight]': 'true'
  }
})
.Class({
  constructor: function(){}
});