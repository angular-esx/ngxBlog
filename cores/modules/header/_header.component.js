import { 
  Component,
  ChangeDetectionStrategy
} from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';

var _STYLE_PROPERTIES = {
  COVER: 'cover'
};


export var xblogHeaderComponent = Component({
  selector: 'xblog-header',
  templateUrl: './templates/header.html',
  styleUrls: ['./styles/header.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [ 'cover' ],
  host: {
    '[class.xblog-header]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,

    function (sanitizer){
      this.sanitizer = sanitizer;
    }
  ],

  ngOnChanges: function(changeRecords) {
    if(changeRecords[_STYLE_PROPERTIES.COVER]){
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.cover + ')');
    }
  }
});