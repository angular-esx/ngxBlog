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
  template: "<ngx-jumbotron [style.background-image]=\"backgroundImage\"><ngx-grid type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"xs-12 lg-8\" offset=\"xs-1 lg-3\"><ng-content select=\"h1[xblog-header-main]\"></ng-content><ng-content select=\"hr[xblog-header-divider]\"></ng-content><ng-content select=\"xblog-header-sub\"></ng-content></ngx-grid-col></ngx-grid-row></ngx-grid></ngx-jumbotron>",
  styles: [":host(.xblog-header){display:block;color:#f5f5f5}:host(.xblog-header) .ngx-jumbotron{display:flex;flex-flow:column nowrap;justify-content:center;background-size:cover;background-attachment:scroll;background-repeat:no-repeat;background-position:center center;min-height:50vh}:host(.xblog-header) .ngx-jumbotron>.ngx-grid{width:100%}:host(.xblog-header) .ngx-jumbotron>.ngx-grid h1[xblog-header-main]{text-align:center;font-size:4rem}:host(.xblog-header) .ngx-jumbotron>.ngx-grid hr[xblog-header-divider]{width:270px;margin:20px auto;border-width:4px;border-top-color:#f5f5f5 !important}:host(.xblog-header) .ngx-jumbotron>.ngx-grid xblog-header-sub{display:block;text-align:center;font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1.25rem;margin:0.5rem 0 0}"],
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