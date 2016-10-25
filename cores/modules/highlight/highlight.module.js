import { 
  Class,
  NgModule 
} from '@angular/core';

import { xblogHighlightDirective } from './highlight.directive';

var _DIRECTIVES = [
  xblogHighlightDirective
];


export var xblogHighlightModuleMetadata = Class({
  constructor: function xblogHighlightModuleMetadata(){
    Object.assign(this, {
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogHighlightModule = NgModule(new xblogHighlightModuleMetadata())
.Class({
  constructor: function xblogHighlightModule(){}
});