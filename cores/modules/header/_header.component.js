import { 
  Class,
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

var _STYLE_PROPERTIES = {
  COVER: 'cover'
};


export var xblogHeaderComponentMetadata = Class({
  constructor: function xblogHeaderComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-header',
      templateUrl: './templates/header.html',
      styleUrls: ['./styles/index.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: [ 'cover' ],
      host: {
        '[class.xblog-header]': 'true'
      }
    });
  }
});

export var xblogHeaderComponent = Component(new xblogHeaderComponentMetadata())
.Class({
  constructor: [
    DomSanitizer,

    function xblogHeaderComponent(sanitizer){
      this.sanitizer = sanitizer;
    }
  ],

  ngOnChanges: function(changeRecords) {
    if(changeRecords[_STYLE_PROPERTIES.COVER]){
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.cover + ')');
    }
  }
});