import * as ngCore from '@angular/core';

export var tableContentComponent = ngCore.Component({
  selector: 'xblog-table-content',
  templateUrl: './templates/table-content.html',
  styleUrls: ['./styles/table-content.scss'],
  properties: [ 'model' ],
  host: {
    '[class.xblog-table-content]': 'true'
  }
})
.Class({
  constructor: function(){}
});