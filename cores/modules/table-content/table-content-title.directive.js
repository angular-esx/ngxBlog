import { 
  Class,
  Directive 
} from '@angular/core';


export var xblogTableContentTitleDirectiveMetadata = Class({
  constructor: function xblogTableContentTitleDirectiveMetadata(){
    Object.assign(this, {
      selector: 'xblog-table-content > xblog-title'
    });
  }
});


export var xblogTableContentTitleDirective = Directive(new xblogTableContentTitleDirectiveMetadata())
.Class({
  constructor: function xblogTableContentTitleDirective(){}
});