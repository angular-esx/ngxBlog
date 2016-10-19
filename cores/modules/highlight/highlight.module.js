import { NgModule } from '@angular/core';

import { xblogHighlightDirective } from './highlight.directive';


export var xblogHighlightModule = NgModule({
  declarations: [ xblogHighlightDirective ],
  exports: [ xblogHighlightDirective ]
})
.Class({
  constructor: function(){}
});