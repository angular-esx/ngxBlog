import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogCodePanelTitleDirectiveMetadata = Class({
  constructor: function xblogCodePanelTitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-code-panel > xblog-title'
    });
  }
});

export var xblogCodePanelTitleDirective = Directive(new xblogCodePanelTitleDirectiveMetadata())
.Class({
  constructor: function xblogCodePanelTitleDirective(){}
});