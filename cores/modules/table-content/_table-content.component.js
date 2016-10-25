import { 
  Class,
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';


export var xblogTableContentComponentMetadata = Class({
  constructor: function xblogTableContentComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-table-content',
      templateUrl: './templates/table-content.html',
      styleUrls: ['./styles/index.scss'],
      changeDetection: ChangeDetectionStrategy.OnPush,
      inputs: [ 'model' ],
      host: {
        '[class.xblog-table-content]': 'true'
      }
    });
  }
});

export var xblogTableContentComponent = Component(new xblogTableContentComponentMetadata())
.Class({
  constructor: function xblogTableContentComponent(){}
});