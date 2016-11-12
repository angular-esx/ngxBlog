import { 
  Class,
  NgModule 
} from '@angular/core';

import {
  ngxGridModule as originNgxGridModule
} from 'ngx-framework/modules';

import {
  xblogCodePanelModule as originXblogCodePanelModule
} from 'xblog-cores/modules';

import { ngxGridModule } from '../../vendors';

import { xblogCodePanelModule } from '../../cores';

import { 
  cmsArticlesModuleMetadata as originCmsArticlesModuleMetadata
} from 'xblog-cms/articles';

var _cmsArticlesModuleMetadata = Class({
  extends: originCmsArticlesModuleMetadata,

  constructor: function(){
    originCmsArticlesModuleMetadata.apply(this);

    this.imports[this.imports.indexOf(originNgxGridModule)] = ngxGridModule;
    this.imports[this.imports.indexOf(originXblogCodePanelModule)] = xblogCodePanelModule;
  }
});


export var cmsArticlesModule = NgModule(new _cmsArticlesModuleMetadata())
.Class({
  constructor: function cmsArticlesModule(){}
});