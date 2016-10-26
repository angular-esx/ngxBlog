import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogHeaderSubtitleDirectiveMetadata = Class({
  constructor: function xblogHeaderSubtitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-header > xblog-subtitle'
    });
  }
});

export var xblogHeaderSubtitleDirective = Directive(new xblogHeaderSubtitleDirectiveMetadata())
.Class({
  constructor: function xblogHeaderSubtitleDirective(){}
});