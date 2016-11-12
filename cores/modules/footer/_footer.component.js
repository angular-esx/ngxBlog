import {
  Class, 
  Component 
} from '@angular/core';


export var xblogFooterComponentMetadata = Class({
  constructor: function xblogFooterComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-footer',
      templateUrl: './templates/footer.html',
      styleUrls: ['./styles/index.scss'],
      host: {
        '[class.xblog-footer]': 'true'
      }
    });
  }
});

export var xblogFooterComponent = Component(new xblogFooterComponentMetadata())
.Class({
  constructor: function xblogFooterComponent(){}
});