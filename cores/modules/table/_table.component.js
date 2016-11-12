import {
  Class, 
  Component 
} from '@angular/core';


export var xblogTableComponentMetadata = Class({
  constructor: function xblogTableComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-table',
      templateUrl: './templates/table.html',
      styleUrls: ['./styles/index.scss'],
      host: {
        '[class.xblog-table]': 'true'
      }
    });
  }
});

export var xblogTableComponent = Component(new xblogTableComponentMetadata())
.Class({
  constructor: function xblogTableComponent(){}
});