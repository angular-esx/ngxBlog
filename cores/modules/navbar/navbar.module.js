import { 
  Class,
  NgModule 
} from '@angular/core';

import { ngxNavbarModule } from 'ngx-framework/modules';

import { xblogNavbarComponent } from './navbar.component';

var _DIRECTIVES = [
  xblogNavbarComponent
];


export var xblogNavbarModuleMetadata = Class({
  constructor: function xblogNavbarModuleMetadata(){
    Object.assign(this, {
      imports: [ ngxNavbarModule ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogNavbarModule = NgModule(new xblogNavbarModuleMetadata())
.Class({
  constructor: function xblogNavbarModule(){}
});