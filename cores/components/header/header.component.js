import * as ngCore from '@angular/core';

import { DomSanitizationService } from '@angular/platform-browser';

import { 
  ngxJumbotronComponent, 
  NGX_JUMBOTRON_DIRECTIVES 
} from 'ngx-bootstrap/components';

function _headerComponent(){
  var _STYLE_PROPERTIES = {
    COVER: 'cover'
  };

  this.constructor = [
    DomSanitizationService,

    function headerComponent(sanitizer){
      this.sanitizer = sanitizer;
    }
  ];

  this.ngOnChanges = function(changeRecords) {
    if(changeRecords[_STYLE_PROPERTIES.COVER]){
      this.backgroundImage = this.sanitizer.bypassSecurityTrustStyle('url(' + this.cover + ')');
    }
  };
}

export var headerComponent = ngCore.Component({
  selector: 'xblog-header',
  templateUrl: './templates/header.html',
  styleUrls: ['./styles/header.scss'],
  directives: [ NGX_JUMBOTRON_DIRECTIVES ],
  properties: [ 'cover' ],
  host: {
    '[class.xblog-header]': 'true'
  }
})
.Class(new _headerComponent());