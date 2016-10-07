import * as ngCore from '@angular/core';

export var footerComponent = ngCore.Component({
  selector: 'xblog-footer',
  templateUrl: './templates/footer.html',
  styleUrls: ['./styles/footer.scss'],
  host: {
    '[class.xblog-footer]': 'true'
  }
})
.Class({
  constructor: function(){}
});