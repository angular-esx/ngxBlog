import {
  Class, 
  NgModule 
} from '@angular/core';

import { xblogSectionComponent } from './section.component';

var _DIRECTIVES = [
  xblogSectionComponent
];


export var xblogSectionModuleMetadata = Class({
  constructor: function xblogSectionModuleMetadata(){
    Object.assign(this, {
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogSectionModule = NgModule(new xblogSectionModuleMetadata())
.Class({
  constructor: function xblogSectionModule(){}
});