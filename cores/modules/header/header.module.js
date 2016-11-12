import { 
  Class,
  NgModule 
} from '@angular/core';

import { 
  ngxGridModule,
  ngxJumbotronModule
 } from 'ngx-framework/modules';

import { xblogHeaderTitleDirective } from './header-title.directive';
import { xblogHeaderSubtitleDirective } from './header-subtitle.directive';
import { xblogHeaderDividerDirective } from './header-divider.directive';
import { xblogHeaderComponent } from './header.component';

var _DIRECTIVES = [
  xblogHeaderTitleDirective, 
  xblogHeaderSubtitleDirective,
  xblogHeaderDividerDirective,
  xblogHeaderComponent 
];


export var xblogHeaderModuleMetadata = Class({
  constructor: function xblogHeaderModuleMetadata(){
    Object.assign(this, {
      imports: [
        ngxGridModule,
        ngxJumbotronModule
      ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogHeaderModule = NgModule(new xblogHeaderModuleMetadata())
.Class({
  constructor: function xblogHeaderModule(){}
});