import {
  Class, 
  Component 
} from '@angular/core';


export var xblogTableComponentMetadata = Class({
  constructor: function xblogTableComponentMetadata(){
    Object.assign(this, {
      selector: 'xblog-table',
      template: "<ng-content select=\"ngx-grid[xblog-table-width]\"></ng-content>",
      styles: [":host(.xblog-table){display:block;overflow-x:auto}:host(.xblog-table) /deep/>.ngx-grid{font-size:.75rem;padding:0 1rem;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row{background-color:#fff}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row.xblog-table-header{background-color:#e6e6e6}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row.xblog-table-header>.ngx-grid-col{font-weight:900}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row.xblog-table-header>.ngx-grid-col:not(:last-child){border-right:2px solid #eceeef}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row:not(:last-child){border-bottom:1px solid #eceeef}:host(.xblog-table) /deep/>.ngx-grid>.ngx-grid-row>.ngx-grid-col{padding:1rem}"],
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