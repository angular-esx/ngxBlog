import {
  Class, 
  NgModule 
} from '@angular/core';

import { 
  ngxCardModule as originNgxCardModule
} from 'ngx-framework/modules';

import {
  xblogPostComponent as originXblogPostComponent,
  xblogPostModuleMetadata as originXblogPostModuleMetadata,
  xblogPostModule as originXblogPostModule
} from 'xblog-cores/modules';

import { ngxCardModule } from '../../vendors';

import { xblogPostComponent } from './post.component';

var _xblogPostModuleMetadata = Class({
  extends: originXblogPostModuleMetadata,

  constructor: function ARTICLE_SHARED_CORES_xblogPostModuleMetadata(){
    originXblogPostModuleMetadata.apply(this);

    this.declarations = [ xblogPostComponent ];

    this.imports.push(originXblogPostModule);
    this.imports[this.imports.indexOf(originNgxCardModule)] = ngxCardModule;

    this.exports[this.exports.indexOf(originXblogPostComponent)] = xblogPostComponent;
  }
});


export var xblogPostModule = NgModule(new _xblogPostModuleMetadata())
.Class({
  constructor: function ARTICLE_SHARED_CORES_xblogPostModule(){}
});