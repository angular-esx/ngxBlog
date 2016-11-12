import { 
  Class,
  Component,
  ElementRef,
  Renderer,
 } from '@angular/core';

import {
  ngxNavbarComponentMetadata as originNgxNavbarComponentMetadata, 
  ngxNavbarComponent as originNgxNavbarComponent
} from 'ngx-framework/modules';

var _ngxNavbarComponentMetadata = Class({
  extends: originNgxNavbarComponentMetadata,

  constructor: function HOME_SHARED_VENDORS_ngxNavbarComponentMetadata(){
    originNgxNavbarComponentMetadata.apply(this);

    Object.assign(this, {
      styles: [":host(.ngx-navbar){display:flex;position:relative;padding:0.5rem 1rem}:host(.ngx-navbar).ngx-navbar-position-top{position:fixed;right:0;left:0;z-index:500;top:0}:host(.ngx-navbar) /deep/>.ngx-navbar-brand{padding:0.25rem 0 0.25rem 0;margin:0 0 0 1rem;font-size:1.25rem;text-decoration:none}:host(.ngx-navbar).ngx-navbar-color-success{background-color:#5cb75c}:host(.ngx-navbar).ngx-navbar-color-success /deep/>.ngx-navbar-brand{cursor:pointer}:host(.ngx-navbar).ngx-navbar-color-success /deep/>.ngx-navbar-brand,:host(.ngx-navbar).ngx-navbar-color-success /deep/>.ngx-navbar-brand:focus,:host(.ngx-navbar).ngx-navbar-color-success /deep/>.ngx-navbar-brand:hover{color:#fff}"]
    });
  }
});

export var ngxNavbarComponent = Component(new _ngxNavbarComponentMetadata())
.Class({
  extends: originNgxNavbarComponent,

  constructor: [
    ElementRef,
    Renderer,

    function HOME_SHARED_VENDORS_ngxNavbarComponent(elementRef, renderer) {
      originNgxNavbarComponent.apply(this, arguments);
    }
  ],
});