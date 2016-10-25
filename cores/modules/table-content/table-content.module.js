import { 
  Class,
  NgModule 
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { xblogTableContentTitleDirective } from './table-content-title.directive';
import { xblogTableContentComponent } from './table-content.component';

var _DIRECTIVES = [
  xblogTableContentTitleDirective, 
  xblogTableContentComponent 
];


export var xblogTableContentModuleMetadata = Class({
  constructor: function xblogTableContentModuleMetadata(){
    Object.assign(this, {
      imports: [ CommonModule ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogTableContentModule = NgModule(new xblogTableContentModuleMetadata())
.Class({
  constructor: function xblogTableContentModule(){}
});