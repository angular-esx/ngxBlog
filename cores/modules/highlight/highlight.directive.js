import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogHighlightDirectiveMetadata = Class({
  constructor: function xblogHighlightDirectiveMetadata(){
    Object.assign(this, {
      selector: '[xblog-highlight]',
      host: {
        '[class.xblog-highlight]': 'true'
      }
    });
  }
});

export var xblogHighlightDirective = Directive(new xblogHighlightDirectiveMetadata())
.Class({
  constructor: function xblogHighlightDirective(){}
});