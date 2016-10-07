import * as ngCore from '@angular/core';

import { DomSanitizationService } from '@angular/platform-browser';

import { 
  NGX_GRID_DIRECTIVES, 
  NGX_JUMBOTRON_DIRECTIVES 
} from 'ngx-bootstrap/components';

var _STYLE_PROPERTIES = {
  COVER: 'cover'
};

export var headerComponent = ngCore.Component({
  selector: 'xblog-header',
  templateUrl: './templates/header.html',
  styleUrls: ['./styles/header.scss'],
  directives: [
    NGX_GRID_DIRECTIVES, 
    NGX_JUMBOTRON_DIRECTIVES 
  ],
  properties: [ 'cover' ],
  host: {
    '[class.xblog-header]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizationService,

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