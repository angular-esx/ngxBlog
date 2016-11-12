import {
  Class, 
  Directive 
} from '@angular/core';


export var xblogTableHeaderDirectiveMetadata = Class({
  constructor: function xblogTableHeaderDirectiveMetadata(){
    Object.assign(this, {
      selector: '[xblog-table-header]',
      host: {
        '[class.xblog-table-header]': 'true'
      }
    });
  }
});

export var xblogTableHeaderDirective = Directive(new xblogTableHeaderDirectiveMetadata())
.Class({
  constructor: function xblogTableHeaderDirective(){}
});