import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { xblogTableContentTitleDirective } from './table-content-title.directive';
import { xblogTableContentComponent } from './table-content.component';

export var xblogTableContentModule = NgModule({
  imports: [ CommonModule ],
  declarations: [
    xblogTableContentTitleDirective, 
    xblogTableContentComponent 
  ],
  exports: [
    xblogTableContentTitleDirective, 
    xblogTableContentComponent 
  ]
})
.Class({
  constructor: function(){}
});