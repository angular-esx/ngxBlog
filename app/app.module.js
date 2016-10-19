import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { cmsArticleService } from '../cms/cores/services';

import {
  xblogNavbarModule,
  xblogFooterModule
} from 'xblog-cores/modules';

import { 
  xblogHomeService, 
  xblogArticleService,
  xblogHomePageModule,
  xblogArticlePageModule
} from '../pages';
import { router } from './router';
import { xblogApp } from './app';


export var xblogModule = NgModule({
  imports: [ 
    RouterModule.forRoot(router),
    xblogNavbarModule,
    xblogFooterModule,
    xblogHomePageModule,
    xblogArticlePageModule
  ],
  declarations: [ xblogApp ],
  providers: [ 
    cmsArticleService,
    xblogHomeService,
    xblogArticleService
  ],
  bootstrap: [ xblogApp ]
})
.Class({
  constructor: function(){}
});