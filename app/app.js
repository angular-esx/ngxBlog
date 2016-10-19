import { Component } from '@angular/core';


export var xblogApp = Component({
  selector: 'xblog',
  template: [
    '<xblog-navbar></xblog-navbar>',
    '<router-outlet></router-outlet>',
    '<xblog-footer></xblog-footer>'
  ].join(''),
})
.Class({
  constructor: function (){}
});