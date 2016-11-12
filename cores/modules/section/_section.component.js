import {
  Class, 
  Component 
} from '@angular/core';


export var xblogSectionComponentMetadata = Class({
  constructor: function xblogSectionComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-section',
      templateUrl: './templates/section.html',
      styleUrls: ['./styles/index.scss'],
      host: {
        '[class.xblog-section]': 'true'
      }
    });
  }
});

export var xblogSectionComponent = Component(new xblogSectionComponentMetadata())
.Class({
  constructor: function xblogSectionComponent(){}
});