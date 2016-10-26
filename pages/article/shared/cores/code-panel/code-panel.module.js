import {
  Class, 
  NgModule 
} from '@angular/core';

import { 
  ngxCardModule as originNgxCardModule
} from 'ngx-framework/modules';

import {
  xblogCodePanelComponent as originXblogCodePanelComponent,
  xblogCodePanelModuleMetadata as originXblogCodePanelModuleMetadata,
  xblogCodePanelModule as originXblogCodePanelModule
} from 'xblog-cores/modules';

import { ngxCardModule } from '../../vendors';

import { xblogCodePanelComponent } from './code-panel.component';

var _xblogCodePanelModuleMetadata = Class({
  extends: originXblogCodePanelModuleMetadata,

  constructor: function ARTICLE_SHARED_CORES_xblogCodePanelModuleMetadata(){
    originXblogCodePanelModuleMetadata.apply(this);

    this.declarations = [ xblogCodePanelComponent ];

    this.imports.push(originXblogCodePanelModule);
    this.imports[this.imports.indexOf(originNgxCardModule)] = ngxCardModule;

    this.exports[this.exports.indexOf(originXblogCodePanelComponent)] = xblogCodePanelComponent;
  }
});


export var xblogCodePanelModule = NgModule(new _xblogCodePanelModuleMetadata())
.Class({
  constructor: function ARTICLE_SHARED_CORES_xblogCodePanelModule(){}
});