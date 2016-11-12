import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogHeaderTitleDirectiveMetadata = Class({
  constructor: function xblogHeaderTitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-header > h1[xblog-title]'
    });
  }
});

export var xblogHeaderTitleDirective = Directive(new xblogHeaderTitleDirectiveMetadata())
.Class({
  constructor: function xblogHeaderTitleDirective(){}
});