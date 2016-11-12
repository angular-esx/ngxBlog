import { 
  Class,
  NgModule 
} from '@angular/core';

import {
  ngxGridComponent as originNgxGridComponent,
  ngxGridModuleMetadata as originNgxGridModuleMetadata,
  ngxGridModule as originNgxGridModule
} from 'ngx-framework/modules';

import { ngxGridComponent } from './grid.component';

var _ngxGridModuleMetadata = Class({
  extends: originNgxGridModuleMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxGridModuleMetadata(){
    originNgxGridModuleMetadata.apply(this);

    Object.assign(this, {
      imports: [ originNgxGridModule ],
      declarations: [ ngxGridComponent ]
    });

    this.exports[this.exports.indexOf(originNgxGridComponent)] = ngxGridComponent;
  }
}); 


export var ngxGridModule = NgModule(new _ngxGridModuleMetadata())
.Class({
  constructor: function HOME_SHARED_VENDORS_ngxGridModule(){}
});