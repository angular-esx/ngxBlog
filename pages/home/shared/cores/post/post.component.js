import { 
  Class,
  Component,
  ElementRef,
  Renderer
} from '@angular/core';

import {
  xblogPostComponentMetadata as originXblogPostComponentMetadata,
  xblogPostComponent as originXblogPostComponent
} from 'xblog-cores/modules';


var _xblogPostComponentMetadata = Class({
  extends: originXblogPostComponentMetadata,

  constructor: function HOME_SHARED_CORES_xblogPostComponentMetadata(){
    originXblogPostComponentMetadata.apply(this);

    Object.assign(this, {
      styles: [":host(.xblog-post){display:block;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-post) /deep/>.ngx-card{border-radius:0;border:none}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a{font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-weight:800;text-decoration:none;color:#333}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a:focus,:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a:hover{color:#5cb75c}:host(.xblog-post) /deep/>.ngx-card ngx-card-title>a>p{margin:0}:host(.xblog-post) /deep/>.ngx-card ngx-card-subtitle{font-style:italic}:host(.xblog-post) /deep/>.ngx-card ngx-card-text>p{overflow:hidden;max-height:4.5em}:host(.xblog-post).xblog-post-size-large /deep/ ngx-card-title>a{font-size:1.375rem}:host(.xblog-post).xblog-post-size-large /deep/ ngx-card-subtitle{font-size:.75rem}:host(.xblog-post).xblog-post-size-large ngx-card-text>p{font-size:.875rem}"]
    });
  }
});

export var xblogPostComponent = Component(new _xblogPostComponentMetadata())
.Class({
  extends: originXblogPostComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_CORES_xblogPostComponent(elementRef, renderer) {
      originXblogPostComponent.apply(this, arguments);
    }
  ],
});