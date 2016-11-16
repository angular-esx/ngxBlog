import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1474390800Component = Component({
  selector: 'article',
  template: "<p>In our article on <a [href]=\"references.DIArticleLink\" rel=\"nofollow\">Dependency Injection in Angular 2</a> we explored what dependency injection actually is, and how it is implemented in the Angular 2 framework.</p><p>In this article we'll take a look at <strong>forward references</strong>, it's an useful feature of the DI system in Angular 2.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"understanding-the-problem\" class=\"section-heading\">Understanding the problem</h2><p>Let's have a look at the example below.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"forwardRef.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>It's just a simple example, we declared a service <span xblog-highlight>exampleService</span> then injected it into the component <span xblog-highlight>exampleComponent</span>.</p><p>We guess that you expect the text \"Hello World\" will display in your screen, right ? But actually, you'll get an error.</p><br><div class=\"screen-capture\"><img [src]=\"forwardRef.screenCaptures[1]\"></div><br><p>What's happened there ? This issue is <strong>order of declarations</strong>. As you can see, we have injected <span xblog-highlight>exampleService</span> into <span xblog-highlight>exampleComponent</span> while we declared <span xblog-highlight>exampleService</span> after <span xblog-highlight>exampleComponent</span>.</p><p>If we re-declare <span xblog-highlight>exampleService</span> before injecting it, everything'll work well.</p><br><p>So in Angular 2, we <strong>must</strong> define everthing before it's usage ? The answer is <strong>\"No, we mustn't.\"</strong>, this's case which <span xblog-highlight>forwardRef()</span> comes into play.</p><br><h2 id=\"forward-references\" class=\"section-heading\">Forward references</h2><xblog-code-panel><xblog-title>{{forwardRef.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"forwardRef.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"forwardRef.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>What <span xblog-highlight>forwardRef()</span> does is, it takes a function as a parameter that returns a class/expression. And because this functions isn’t immediately called but instead is called after <span xblog-highlight>exampleService</span> is declared it is safe to return <span xblog-highlight>exampleService</span> from it.</p><br>",
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