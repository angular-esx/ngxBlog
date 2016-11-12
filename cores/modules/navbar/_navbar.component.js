import { 
  Class,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';


export var xblogNavbarComponentMetadata = Class({
  constructor: function xblogNavbarComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-navbar',
      templateUrl: './templates/navbar.html',
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