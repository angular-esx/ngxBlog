import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogCodePanelLinkDirectiveMetadata = Class({
  constructor: function xblogCodePanelLinkDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-code-panel > a[xblog-source-code]'
    });
  }
});

export var xblogCodePanelLinkDirective = Directive(new xblogCodePanelLinkDirectiveMetadata())
.Class({
  constructor: function xblogCodePanelLinkDirective(){}
});