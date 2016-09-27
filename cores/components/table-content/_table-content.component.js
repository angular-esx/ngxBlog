import * as ngCore from '@angular/core';

function _tableContentComponent(){
  this.constructor = function() {};
}

export var tableContentComponent = ngCore.Component({
  selector: 'xblog-table-content',
  templateUrl: './templates/table-content.html',
  styleUrls: ['./styles/table-content.scss'],
  properties: [ 'model' ],
  host: {
    '[class.xblog-table-content]': 'true'
  }
})
.Class(new _tableContentComponent());