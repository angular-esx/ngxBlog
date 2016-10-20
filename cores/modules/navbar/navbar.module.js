import { NgModule } from '@angular/core';

import { ngxNavbarModule } from 'ngx-framework/modules';

import { xblogNavbarComponent } from './navbar.component';


export var xblogNavbarModule = NgModule({
  imports: [ ngxNavbarModule ],
  declarations: [ xblogNavbarComponent ],
  exports: [ xblogNavbarComponent ]
})
.Class({
  constructor: function(){}
});