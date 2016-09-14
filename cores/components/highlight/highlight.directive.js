import * as ngCore from '@angular/core';

function _highlightDirective(){
  this.constructor = function highlightDirective(){};
}

export var highlightDirective = ngCore.Directive({
  selector: '[xblog-highlight]',
  host: {
    '[class.xblog-highlight]': 'true'
  }
})
.Class(new _highlightDirective());