import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ngxPortalModule } from 'ngx-framework/cores';

import { xblogFooterModule } from 'xblog-cores/modules';

import { xblogArticleStoreService } from 'xblog-store';

import {
  ngxGridModule,
  xblogNavbarModule,
  xblogHeaderModule,
  xblogPostModule,
  xblogCodePanelModule,
  cmsArticlesModule
} from './shared';

import { xblogArticlePage } from './article.page';

import { xblogArticleService } from './services/article.service';


export var xblogArticlePageModule = NgModule({
  imports: [ 
    CommonModule,
    ngxPortalModule,
    ngxGridModule,
    xblogNavbarModule,
    xblogHeaderModule,
    xblogFooterModule,
    xblogPostModule,
    xblogCodePanelModule,
    cmsArticlesModule
  ],
  declarations: [ xblogArticlePage ],
  providers: [
    xblogArticleStoreService, 
    xblogArticleService 
  ],
  exports: [ xblogArticlePage ]
})
.Class({
  constructor: function(){}
});