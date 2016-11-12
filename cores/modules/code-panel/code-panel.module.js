import {
  Class, 
  NgModule 
} from '@angular/core';

import { ngxCardModule } from 'ngx-framework/modules';

import { xblogCodePanelTitleDirective } from './code-panel-title.directive';
import { xblogCodePanelLinkDirective } from './code-panel-link.directive';
import { xblogCodePanelContentDirective } from './code-panel-content.directive';
import { xblogCodePanelComponent } from './code-panel.component';

var _DIRECTIVES = [
  xblogCodePanelTitleDirective,
  xblogCodePanelLinkDirective,
  xblogCodePanelContentDirective,
  xblogCodePanelComponent
];


export var xblogCodePanelModuleMetadata = Class({
  constructor: function xblogCodePanelModuleMetadata(){
    Object.assign(this, {
      imports: [ ngxCardModule ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});


export var xblogCodePanelModule = NgModule(new xblogCodePanelModuleMetadata())
.Class({
  constructor: function xblogCodePanelModule(){}
});