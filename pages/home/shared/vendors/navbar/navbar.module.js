import { 
  Class,
  NgModule 
} from '@angular/core';

import {
  ngxNavbarComponent as originNgxNavbarComponent,
  ngxNavbarModuleMetadata as originNgxNavbarModuleMetadata,
  ngxNavbarModule as originNgxNavbarModule
} from 'ngx-framework/modules';

import { ngxNavbarComponent } from './navbar.component';

var _ngxNavbarModuleMetadata = Class({
  extends: originNgxNavbarModuleMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxNavbarModuleMetadata(){
    originNgxNavbarModuleMetadata.apply(this);

    Object.assign(this, {
      imports: [ originNgxNavbarModule ],
      declarations: [ ngxNavbarComponent ]
    });

    this.exports[this.exports.indexOf(originNgxNavbarComponent)] = ngxNavbarComponent;
  }
});


export var ngxNavbarModule = NgModule(new _ngxNavbarModuleMetadata())
.Class({
  constructor: function HOME_SHARED_VENDORS_ngxNavbarModule(){}
});