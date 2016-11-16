import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1475677406Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1475677406.html',
  host: {
    '[class.xblog-article-1475677406]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1475677406;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.componentArticleLink = '#';

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng2-shadow-dom', name: 'Shadow DOM in Angular 2' },
      { id: 'view-encapsulation-types', name: 'View encapsulation types' },
    ])
    .addSubHeadings([
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-none', name: 'ViewEncapsulation.None' },
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-emulated', name: 'ViewEncapsulation.Emulated' },
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-native', name: 'ViewEncapsulation.Native' },
    ])
    .build();

    this.viewEncapsulationNone = {
      sourceCode: {
        name: 'ViewEncapsulation.None ',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-none/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock(getViewEncapsulationNone01),
        2: this.getCodeBlock(getViewEncapsulationNone02)
      }
    };

    this.viewEncapsulationEmulated = {
      sourceCode: {
        name: 'ViewEncapsulation.Emulated',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-emulated/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock(getViewEncapsulationEmulated01),
        2: this.getCodeBlock(getViewEncapsulationEmulated02)
      }
    }; 

    this.viewEncapsulationNative = {
      sourceCode: {
        name: 'ViewEncapsulation.Native',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-native/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock(getViewEncapsulationNative)
      },
      screenCaptures: {
        1: resourceUtils.getImg('viewEncapsulationNative-example-1475677406.png')
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});

function getViewEncapsulationNone01(){
  return `
    import * as ngCore from '@angular/core';

    export var exampleComponent = ngCore.Component({
      selector: 'my-example',
      template: '<h1>ViewEncapsulation.None</h1>',
      styles: ['h1 { color: green; }'],
      encapsulation: ngCore.ViewEncapsulation.None
    })
    .Class({
      constructor: function(){},
    });`;
}

function getViewEncapsulationNone02(){
  return `
    <html>
      <head>
        .....
        <style>h1 { color: green; }</style>
      </head>

      <body>
        .....
        <my-app _nghost-kbk-1>
          <div _ngcontent-kbk-1></div>
          <my-example>
            <h1>ViewEncapsulation.None</h1>
          </my-example>
        </my-app>
        .....
      </body>
    </html>`;
}

function getViewEncapsulationEmulated01(){
  return `
    import * as ngCore from '@angular/core';

    export var exampleComponent = ngCore.Component({
      selector: 'my-example',
      template: '<h1>ViewEncapsulation.Emulated</h1>',
      styles: ['h1 { color: green; }'],
      encapsulation: ngCore.ViewEncapsulation.Emulated
    })
    .Class({
      constructor: function(){},
    });`;
}

function getViewEncapsulationEmulated02(){
  return `
    <html>
      <head>
        .....
        <style>h1[_ngcontent-ujj-3] { color: green; }</style>
      </head>

      <body>
        .....
        <my-app _nghost-ujj-1>
          <div _ngcontent-ujj-1></div>
          <my-example _nghost-ujj-3>
            <h1 _ngcontent-ujj-3>ViewEncapsulation.Emulated</h1>
          </my-example>
        </my-app>
        .....
      </body>
    </html>`;
}

function getViewEncapsulationNative(){
  return `
    import * as ngCore from '@angular/core';

    export var exampleComponent = ngCore.Component({
      selector: 'my-example',
      template: '<h1>ViewEncapsulation.Native</h1>',
      styles: ['h1 { color: green; }'],
      encapsulation: ngCore.ViewEncapsulation.Native
    })
    .Class({
      constructor: function(){},
    });`;
}