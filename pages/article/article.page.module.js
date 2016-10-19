import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ngxPortalModule } from 'ngx-framework/cores';

import {
  ngxGridModule,
  ngxCardModule
} from 'ngx-framework/modules';

import { 
  xblogHeaderModule,
  xblogPostModule 
} from 'xblog-cores/modules';

import { cmsArticlesModule } from '../../cms/articles';

import { xblogArticlePage } from './article.page';

import { xblogArticleService } from './services/article.service';


export var xblogArticlePageModule = NgModule({
  imports: [ 
    CommonModule,
    ngxPortalModule,
    ngxGridModule,
    ngxCardModule,
    xblogHeaderModule,
    xblogPostModule,
    cmsArticlesModule
  ],
  declarations: [ xblogArticlePage ],
  providers: [ xblogArticleService ],
  exports: [ xblogArticlePage ]
})
.Class({
  constructor: function(){}
});