import { Component } from '@angular/core';

export var xblogFooterComponent = Component({
  selector: 'xblog-footer',
  template: "<a class=\"xblog-footer-social-link\" href=\"#\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-twitter fa-stack-1x fa-inverse\"></i> </span></a><a class=\"xblog-footer-social-link\" href=\"#\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-facebook fa-stack-1x fa-inverse\"></i> </span></a><a class=\"xblog-footer-social-link\" href=\"#\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x\"></i> <i class=\"fa fa-github fa-stack-1x fa-inverse\"></i></span></a><p class=\"xblog-footer-copyright\">Copyright &copy; Your Website 2016</p>",
  styles: [":host(.xblog-footer){display:block;padding:2.5rem 0 3.25rem;text-align:center}:host(.xblog-footer)>.xblog-footer-social-link{padding:0 0.25rem;color:#333}:host(.xblog-footer)>.xblog-footer-social-link:focus,:host(.xblog-footer)>.xblog-footer-social-link:hover{text-decoration:none;color:#5cb75c}:host(.xblog-footer)>.xblog-footer-copyright{font-size:.75rem;text-align:center;margin:0.5rem 0 0}"],
  host: {
    '[class.xblog-footer]': 'true'
  }
})
.Class({
  constructor: function(){}
});