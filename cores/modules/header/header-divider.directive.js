import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogHeaderDividerDirectiveMetadata = Class({
  constructor: function xblogHeaderDividerDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-header > hr[xblog-divider]'
    });
  }
});

export var xblogHeaderDividerDirective = Directive(new xblogHeaderDividerDirectiveMetadata())
.Class({
  constructor: function xblogHeaderDividerDirective(){}
});