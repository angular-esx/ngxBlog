import {
  Class, 
  NgModule 
} from '@angular/core';

import { 
  ngxNavbarModule as originNgxNavbarModule
} from 'ngx-framework/modules';

import {
  xblogNavbarComponent as originXblogNavbarComponent,
  xblogNavbarModuleMetadata as originXblogNavbarModuleMetadata,
  xblogNavbarModule as originXblogNavbarModule
} from 'xblog-cores/modules';

import { ngxNavbarModule } from '../../vendors';

import { xblogNavbarComponent } from './navbar.component';

var _xblogNavbarModuleMetadata = Class({
  extends: originXblogNavbarModuleMetadata,

  constructor: function HOME_SHARED_CORES_xblogNavbarModuleMetadata(){
    originXblogNavbarModuleMetadata.apply(this);

    this.declarations = [ xblogNavbarComponent ];

    this.imports.push(originXblogNavbarModule);
    this.imports[this.imports.indexOf(originNgxNavbarModule)] = ngxNavbarModule;

    this.exports[this.exports.indexOf(originXblogNavbarComponent)] = xblogNavbarComponent;
  }
});


export var xblogNavbarModule = NgModule(new _xblogNavbarModuleMetadata())
.Class({
  constructor: function HOME_SHARED_CORES_xblogNavbarModule(){}
});