import { NgModule } from '@angular/core';

import { RouterModule }   from '@angular/router';

import { ngxCardModule } from 'ngx-framework/modules';

import { xblogPostComponent } from './post.component';


export var xblogPostModule = NgModule({
  imports: [ 
    RouterModule,
    ngxCardModule 
  ],
  declarations: [ xblogPostComponent ],
  exports: [ xblogPostComponent ]
})
.Class({
  constructor: function(){}
});