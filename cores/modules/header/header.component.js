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
      template: "<ngx-jumbotron [style.background-image]=\"backgroundImage\"><ngx-grid type=\"fluid\"><ngx-grid-row><ngx-grid-col size=\"xs-12 lg-8\" offset=\"xs-1 lg-3\"><ng-content select=\"xblog-header > h1[xblog-title]\"></ng-content><ng-content select=\"xblog-header > hr[xblog-divider]\"></ng-content><ng-content select=\"xblog-header > xblog-subtitle\"></ng-content></ngx-grid-col></ngx-grid-row></ngx-grid></ngx-jumbotron>",
      styles: [":host(.xblog-header){display:block;color:#f5f5f5}:host(.xblog-header) /deep/>.ngx-jumbotron{display:flex;flex-flow:column nowrap;justify-content:center;background-size:cover;background-attachment:scroll;background-repeat:no-repeat;background-position:center center;min-height:50vh}:host(.xblog-header) /deep/>.ngx-jumbotron>.ngx-grid{width:100%}:host(.xblog-header) /deep/>.ngx-jumbotron>.ngx-grid h1[xblog-title]{text-align:center;font-size:4rem}:host(.xblog-header) /deep/>.ngx-jumbotron>.ngx-grid hr[xblog-divider]{width:270px;margin:20px auto;border-width:4px;border-top-color:#f5f5f5 !important}:host(.xblog-header) /deep/>.ngx-jumbotron>.ngx-grid xblog-subtitle{display:block;text-align:center;font-family:\"Open Sans\",\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:1.25rem;margin:0.5rem 0 0}"],
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