import { 
  Class,
  NgModule 
} from '@angular/core';

import {
  ngxCardComponent as originNgxCardComponent,
  ngxCardModuleMetadata as originNgxCardModuleMetadata,
  ngxCardModule as originNgxCardModule
} from 'ngx-framework/modules';

import { ngxCardComponent } from './card.component';

var _ngxCardModuleMetadata = Class({
  extends: originNgxCardModuleMetadata,

  constructor: function ARTICLE_SHARED_VENDORS_ngxCardModuleMetadata(){
    originNgxCardModuleMetadata.apply(this);

    Object.assign(this, {
      imports: [ originNgxCardModule ],
      declarations: [ ngxCardComponent ]
    });

    this.exports[this.exports.indexOf(originNgxCardComponent)] = ngxCardComponent;
  }
}); 


export var ngxCardModule = NgModule(new _ngxCardModuleMetadata())
.Class({
  constructor: function ARTICLE_SHARED_VENDORS_ngxCardModule(){}
});