import {
  Class, 
  NgModule 
} from '@angular/core';

import { 
  ngxGridModule as originNgxGridModule
} from 'ngx-framework/modules';

import {
  xblogHeaderComponent as originXblogHeaderComponent,
  xblogHeaderModuleMetadata as originXblogHeaderModuleMetadata,
  xblogHeaderModule as originXblogHeaderModule
} from 'xblog-cores/modules';

import { ngxGridModule } from '../../vendors';

import { xblogHeaderComponent } from './header.component';

var _xblogHeaderModuleMetadata = Class({
  extends: originXblogHeaderModuleMetadata,

  constructor: function HOME_SHARED_CORES_xblogHeaderModuleMetadata(){
    originXblogHeaderModuleMetadata.apply(this);

    this.declarations = [ xblogHeaderComponent ];

    this.imports.push(originXblogHeaderModule);
    this.imports[this.imports.indexOf(originNgxGridModule)] = ngxGridModule;

    this.exports[this.exports.indexOf(originXblogHeaderComponent)] = xblogHeaderComponent;
  }
});


export var xblogHeaderModule = NgModule(new _xblogHeaderModuleMetadata())
.Class({
  constructor: function HOME_SHARED_CORES_xblogHeaderModule(){}
});