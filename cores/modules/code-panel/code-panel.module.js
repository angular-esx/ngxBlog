import { NgModule } from '@angular/core';

import { ngxCardModule } from 'ngx-framework/modules';

import { xblogCodePanelTitleDirective } from './code-panel-title.directive';
import { xblogCodePanelLinkDirective } from './code-panel-link.directive';
import { xblogCodePanelContentDirective } from './code-panel-content.directive';
import { xblogCodePanelComponent } from './code-panel.component';


export var xblogCodePanelModule = NgModule({
  imports: [ ngxCardModule ],
  declarations: [ 
    xblogCodePanelTitleDirective,
    xblogCodePanelLinkDirective,
    xblogCodePanelContentDirective,
    xblogCodePanelComponent 
  ],
  exports: [ 
    xblogCodePanelTitleDirective,
    xblogCodePanelLinkDirective,
    xblogCodePanelContentDirective,
    xblogCodePanelComponent 
   ]
})
.Class({
  constructor: function(){}
});