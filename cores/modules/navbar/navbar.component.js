import { 
  Class,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';


export var xblogNavbarComponentMetadata = Class({
  constructor: function xblogNavbarComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-navbar',
      template: "<ngx-navbar color=\"success\" position=\"top\"><div ngx-navbar-brand>$ngx</div></ngx-navbar>",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        '[class.xblog-navbar]': 'true'
      }
    });
  }
});

export var xblogNavbarComponent = Component(new xblogNavbarComponentMetadata())
.Class({
  constructor: function xblogNavbarComponent(){}
});