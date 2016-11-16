import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1474390800Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1474390800.html',
  host: {
    '[class.xblog-article-1474390800]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1474390800;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      DIArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'understanding-the-problem', name: 'Understanding the problem' },
      { id: 'forward-references', name: 'Forward references' }
    ])
    .build();

    this.forwardRef = {
      sourceCode: {
        name: 'Forward references',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'forward-references')
      },
      codeBlocks: {
        1: this.getCodeBlock(getForwardReferences01),
        2: this.getCodeBlock(getForwardReferences02)
      },
      screenCaptures: {
        1: resourceUtils.getImg('forwardReferences-example-1-1474390800.png')
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getForwardReferences01(){
  return `
    import { Component, Class } from '@angular/core';


    export var exampleComponent = Component({
      selector: 'my-example',
      template: '<p>{{text}}</p>'
    })
    .Class({
      constructor: [
        exampleService,
        
        function(exampleService){
          this.text = exampleService.getText();
        }
      ]
    });

    export var exampleService = Class({
      constructor: function(){},

      getText: function(){ return 'Hello World'; }
    });`;
}

function getForwardReferences02(){
  return `
    import { Component, Class, forwardRef } from '@angular/core';


    export var exampleComponent = Component({
      selector: 'my-example',
      template: '<p>{{text}}</p>'
    })
    .Class({
      constructor: [
        forwardRef(function(){ return exampleService; }),
        
        function exampleComponent(exampleService){
          this.text = exampleService.getText();
        }
      ]
    });

    export var exampleService = Class({
      constructor: function(){},

      getText: function(){ return 'Hello World'; }
    });`;
}