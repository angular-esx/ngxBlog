import { Directive } from '@angular/core';

export var xblogHighlightDirective = Directive({
  selector: '[xblog-highlight]',
  host: {
    '[class.xblog-highlight]': 'true'
  }
})
.Class({
  constructor: function(){}
});