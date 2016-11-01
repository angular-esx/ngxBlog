import {
  Class, 
  Component 
} from '@angular/core';


export var xblogSectionComponentMetadata = Class({
  constructor: function xblogSectionComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-section',
      template: "<ng-content></ng-content>",
      styles: [":host(.xblog-section){display:block;padding:1.5rem;background-color:#f5f5f5;border-left:3px solid #5cb75c}"],
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