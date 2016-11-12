import {
  Class, 
  NgModule 
} from '@angular/core';

import { xblogFooterComponent } from './footer.component';

var _DIRECTIVES = [
  xblogFooterComponent
];


export var xblogFooterModuleMetadata = Class({
  constructor: function xblogFooterModuleMetadata(){
    Object.assign(this, {
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogFooterModule = NgModule(new xblogFooterModuleMetadata())
.Class({
  constructor: function xblogFooterModule(){}
});