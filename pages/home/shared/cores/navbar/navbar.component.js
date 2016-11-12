import { Component } from '@angular/core';

import {
  xblogNavbarComponentMetadata as originXblogNavbarComponentMetadata,
  xblogNavbarComponent as originXblogNavbarComponent
} from 'xblog-cores/modules';


export var xblogNavbarComponent = Component(new originXblogNavbarComponentMetadata())
.Class({
  extends: originXblogNavbarComponent,

  constructor: function HOME_SHARED_CORES_xblogNavbarComponent(){
    originXblogNavbarComponent.apply(this);
  }
});