import { 
  Class,
  NgModule 
} from '@angular/core';

import { RouterModule }   from '@angular/router';

import { ngxCardModule } from 'ngx-framework/modules';

import { xblogPostComponent } from './post.component';

var _DIRECTIVES = [
  xblogPostComponent
];


export var xblogPostModuleMetadata = Class({
  constructor: function xblogPostModuleMetadata(){
    Object.assign(this, {
      imports: [ 
        RouterModule,
        ngxCardModule 
      ],
      declarations: [].concat(_DIRECTIVES),
      exports: [].concat(_DIRECTIVES)
    });
  }
});

export var xblogPostModule = NgModule(new xblogPostModuleMetadata())
.Class({
  constructor: function xblogPostModule(){}
});