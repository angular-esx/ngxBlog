import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ngxGridModule } from 'ngx-framework/modules';

import { 
  xblogHeaderModule,
  xblogPostModule 
} from 'xblog-cores/modules';

import { xblogHomePage } from './home.page';

import { xblogHomeService } from './services/home.service';


export var xblogHomePageModule = NgModule({
  imports: [ 
    CommonModule,
    ngxGridModule,
    xblogHeaderModule,
    xblogPostModule
  ],
  declarations: [ xblogHomePage ],
  providers: [ xblogHomeService ],
  exports: [ xblogHomePage ]
})
.Class({
  constructor: function(){}
});