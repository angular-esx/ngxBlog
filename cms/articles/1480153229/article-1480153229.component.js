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
        { id: 'Components', name: 'Components' },
        { id: 'Directives', name: 'Directives' }
      ])
      .addSubHeadings([
        { headingId: 'my-heading', id: 'my-subheading', name: 'My subheading' },
      ])
      .build();

    this.components = {
      simpleComponent: {
        sourceCode: {
          name: 'A Simple Component',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-changes/example.component.js')
        },
        codeBlocks: this.getCodeBlock(getSimpleComponent)
      },
      complexComponent: {
        sourceCode: {
          exampleComponent: {
            name: 'Component has some attributes'
          }
        },
        codeBlocks: this.getCodeBlock(getComplexComponent)
      },
      simpleDirective: {
        sourceCode: {
          name: 'A Simple Directive',
          link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-changes/example.component.js')
        },
        codeBlocks: this.getCodeBlock(getSimpleDirective)
      },
    };
  },

  getCodeBlock: function (getter, lang) {
    var _langs = lang ? [lang] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});


function getSimpleComponent() {
  return `
    import { Component } from '@angular/core';

    export const AppComponent = Component({
      selector: 'my-app',
      template: '<h1>My First Component</h1>'
    })
    .Class({
      constructor: function(){ }
    });`;
}

function getComplexComponent() {
  return `
    import { Component } from '@angular/core';
    import { HeroService } from './HeroService';
    import { HightLight } from './HightLight';

    export const HeroListComponent = Component({
      ...
      inputs: ['hero'],
      outputs: ['heroUpdated'],
      styles: ['h1 { color: "red" }'],
      providers: [HeroService],
      directives: [HightLight]
    })
    .Class({
      constructor: function(){ }
    });`;
}

function getSimpleDirective() {
  return `
    import { Directive } from '@angular/core';

    export const HightLight = Directive({
      selector: '[hightlight]',
      inputs: ['color']
    })
    .Class({
      constructor: function(){ }
    });`;
}