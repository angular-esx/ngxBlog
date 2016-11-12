import {
  Class, 
  NgModule 
} from '@angular/core';

import { xblogTableComponent } from './table.component';
import { xblogTableHeaderDirective } from './table-header.directive';
import { xblogTableWidthDirective } from './table-width.directive';

var _DIRECTIVES = [
  xblogTableHeaderDirective,
  xblogTableWidthDirective,
  xblogTableComponent
];


export var xblogTableModuleMetadata = Class({
  constructor: function xblogTableModuleMetadata(){
    Object.assign(this, {
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogTableModule = NgModule(new xblogTableModuleMetadata())
.Class({
  constructor: function xblogTableModule(){}
});