import { 
  Component,
  ChangeDetectionStrategy,
} from '@angular/core';

export var xblogTableContentComponent = Component({
  selector: 'xblog-table-content',
  templateUrl: './templates/table-content.html',
  styleUrls: ['./styles/table-content.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [ 'model' ],
  host: {
    '[class.xblog-table-content]': 'true'
  }
})
.Class({
  constructor: function(){}
});