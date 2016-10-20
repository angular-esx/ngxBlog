import { NgModule } from '@angular/core';

import { 
  ngxGridModule,
  ngxJumbotronModule
 } from 'ngx-framework/modules';

import { xblogHeaderTitleDirective } from './header-title.directive';
import { xblogHeaderSubtitleDirective } from './header-subtitle.directive';
import { xblogHeaderDividerDirective } from './header-divider.directive';
import { xblogHeaderComponent } from './header.component';


export var xblogHeaderModule = NgModule({
  imports: [
    ngxGridModule,
    ngxJumbotronModule
  ],
  declarations: [
    xblogHeaderTitleDirective, 
    xblogHeaderSubtitleDirective,
    xblogHeaderDividerDirective,
    xblogHeaderComponent 
  ],
  exports: [
    xblogHeaderTitleDirective, 
    xblogHeaderSubtitleDirective,
    xblogHeaderDividerDirective,
    xblogHeaderComponent 
  ]
})
.Class({
  constructor: function(){}
});