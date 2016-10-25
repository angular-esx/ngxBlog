import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { xblogFooterModule } from 'xblog-cores/modules';

import { xblogArticleStoreService } from 'xblog-store';

import { 
  ngxGridModule,
  xblogNavbarModule,
  xblogHeaderModule,
  xblogPostModule
} from './shared';

import { xblogHomePage } from './home.page';

import { xblogHomeService } from './services/home.service';


export var xblogHomePageModule = NgModule({
  imports: [ 
    CommonModule,
    ngxGridModule,
    xblogNavbarModule,
    xblogHeaderModule,
    xblogPostModule,
    xblogFooterModule
  ],
  declarations: [ xblogHomePage ],
  providers: [
    xblogArticleStoreService, 
    xblogHomeService 
  ],
  exports: [ xblogHomePage ]
})
.Class({
  constructor: function(){}
});