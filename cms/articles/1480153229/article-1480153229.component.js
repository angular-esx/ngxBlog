import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1480153229Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1480153229.html',
  host: {
    '[class.xblog-article-1480153229]': 'true'
  }
}).Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService) {
      this.id = 1480153229;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function () {
    this.tableContents = this.tableContentService
      .getBuilder()
      .addHeadings([
        { id: 'my-heading', name: 'My heading' }
      ])
      .addSubHeadings([
        { headingId: 'my-heading', id: 'my-subheading', name: 'My subheading' },
      ])
      .build();
  },

  getCodeBlock: function (getter, lang) {
    var _langs = lang ? [lang] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
