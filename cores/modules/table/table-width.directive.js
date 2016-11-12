import {
  Class, 
  Directive 
} from '@angular/core';


export var xblogTableWidthDirectiveMetadata = Class({
  constructor: function xblogTableWidthDirectiveMetadata(){
    Object.assign(this, {
      selector: '[xblog-table-width]',
      inputs: [ 'width:xblog-table-width' ],
      host: {
        '[style.width]': 'width'
      }
    });
  }
});

export var xblogTableWidthDirective = Directive(new xblogTableWidthDirectiveMetadata())
.Class({
  constructor: function xblogTableWidthDirective(){},

  ngOnInit: function(){
    if(!this.width) { throw 'width property is required by xblogTableWidthDirective'; }
  }
});