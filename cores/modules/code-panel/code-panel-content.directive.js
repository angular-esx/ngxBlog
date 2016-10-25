import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogCodePanelContentDirectiveMetadata = Class({
  constructor: function xblogCodePanelContentDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-code-panel > xblog-code'
    });
  }
});

export var xblogCodePanelContentDirective = Directive(new xblogCodePanelContentDirectiveMetadata())
.Class({
  constructor: function xblogCodePanelContentDirective(){}
});