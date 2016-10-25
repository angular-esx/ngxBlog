import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { cmsArticleService } from '../cms/cores/services';

import { 
  xblogHomePageModule,
  xblogArticlePageModule
} from '../pages';
import { router } from './router';
import { xblogApp } from './app';


export var xblogModule = NgModule({
  imports: [ 
    BrowserModule,
    RouterModule.forRoot(router),
    xblogHomePageModule,
    xblogArticlePageModule
  ],
  declarations: [ xblogApp ],
  providers: [ cmsArticleService ],
  bootstrap: [ xblogApp ]
})
.Class({
  constructor: function xblogModule(){}
});