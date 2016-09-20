import * as ngCore from '@angular/core';

import { ngxBaseComponent } from 'ngx-bootstrap/cores';
import { NGX_CARD_DIRECTIVES } from 'ngx-bootstrap/components';

function _codePanelComponent(){
  var _base;

  this.extends = ngxBaseComponent;

  this.constructor =  [
    ngCore.ElementRef,
    ngCore.Renderer,

    function codePanelComponent(elementRef, renderer) {
      ngxBaseComponent.apply(this, arguments);
    }
  ];

  this.getPrefixClass = function(){
    return 'xblog-code-panel';
  };

  function _getBaseInstance(context){ 
    if(!_base){ _base = context.getBaseInstance(ngxBaseComponent); }
    return _base;
  }
}

export var codePanelComponent = ngCore.Component({
  selector: 'xblog-code-panel',
  template: "<ngx-card><ngx-card-header><ngx-card-title><ng-content select=\"xblog-code-panel > xblog-title\"></ng-content></ngx-card-title><ngx-card-actions><ng-content select=\"a[xblog-source-code]\"></ng-content></ngx-card-actions></ngx-card-header><ngx-card-content><pre>       <code class=\"{{lang}}\">         <ng-content select=\"xblog-code\"></ng-content>       </code>     </pre></ngx-card-content></ngx-card>",
  styles: [":host(.xblog-code-panel){display:block;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-code-panel) .ngx-card{border-radius:0;border:none}:host(.xblog-code-panel) .ngx-card xblog-title{font-weight:800;color:#333}:host(.xblog-code-panel) .ngx-card a[xblog-source-code]{font-style:italic;font-weight:800;text-decoration:none;text-transform:lowercase}:host(.xblog-code-panel) .ngx-card a[xblog-source-code]:focus,:host(.xblog-code-panel) .ngx-card a[xblog-source-code]:hover{color:#5cb75c}:host(.xblog-code-panel) .ngx-card ngx-card-content{margin:0.5rem -1.25rem -3.5rem -1.25rem;color:#fff;background-color:#3C4556}:host(.xblog-code-panel) .ngx-card ngx-card-content code{display:block;overflow-x:auto;margin:-1.5rem 0}:host(.xblog-code-panel) .ngx-card ngx-card-content code xblog-code{display:block;font-size:.875rem;padding:1rem 1.25rem}:host(.xblog-code-panel).xblog-code-panel-type-no-header .ngx-card{padding-top:0}:host(.xblog-code-panel).xblog-code-panel-type-no-header .ngx-card>.ngx-card-header{display:none}"],
  directives: [ 
    NGX_CARD_DIRECTIVES 
  ],
  properties: [ 'lang', 'type' ],
  host: {
    '[class.xblog-code-panel]': 'true'
  }
})
.Class(new _codePanelComponent());