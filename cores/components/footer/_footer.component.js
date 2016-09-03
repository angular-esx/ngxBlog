import * as ngCore from '@angular/core';

function _footerComponent(){
  this.constructor = function footerComponent(){};
}

export var footerComponent = ngCore.Component({
  selector: 'xblog-footer',
  templateUrl: './templates/footer.html',
  styleUrls: ['./styles/footer.scss'],
  host: {
    '[class.xblog-footer]': 'true'
  }
})
.Class(new _footerComponent());