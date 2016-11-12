import { Component } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

import {
  xblogHeaderComponentMetadata as originXblogHeaderComponentMetadata,
  xblogHeaderComponent as originXblogHeaderComponent
} from 'xblog-cores/modules';


export var xblogHeaderComponent = Component(new originXblogHeaderComponentMetadata())
.Class({
  extends: originXblogHeaderComponent,

  constructor: [
    DomSanitizer,

    function HOME_SHARED_CORES_xblogHeaderComponent(sanitizer){
      originXblogHeaderComponent.apply(this, arguments);
    }
  ]
});