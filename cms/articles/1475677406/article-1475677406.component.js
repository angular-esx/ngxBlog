import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1475677406Component = Component({
  selector: 'article',
  template: "<p>In our article on <a href=\"{{componentArticleLink}}\">Angular 2 Components</a> we learned how styles are applied to our component when defining them in different ways.</p><p>This article explains not only how we can tell Angular to use native Shadow DOM, but also what the other view encapsulation solutions are, that the framework comes with and why they exist.</p><br><p>Before we get started and take a look at how to use Angular’s different view encapsulation types, we assume that you have already get basic knowledges about Shadow DOM.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"ng2-shadow-dom\" class=\"section-heading\">Shadow DOM in Angular 2</h2><p>As you know, Angular 2 already embraces the idea of building applications in components and making them reusable.</p><p>Although, components in Angular are not really web components, but we can apply <span xblog-highlight>scoped styles</span> to elements without bleeding out to the outer world.</p><br><p>In fact, Angular 2 doesn’t use native Shadow DOM by default, it uses an emulation.</p><p>The main reason for that is that most browsers don’t support Shadow DOM yet, but we can easily tell Angular to use the native Shadow DOM if we want.</p><br><p>Next, we'll find out what we need to do to apply view encapsution for our component in Angular 2.</p><br><h2 id=\"view-encapsulation-types\" class=\"section-heading\">View encapsulation types</h2><p>There are three view encapsulation types:</p><br><p><strong>- ViewEncapsulation.None:</strong> No Shadow DOM and no style encapsulation at all.</p><p><strong>- ViewEncapsulation.Emulated:</strong> No Shadow DOM but style encapsulation emulation. It's used by default.</p><p><strong>- ViewEncapsulation.Native:</strong> Native Shadow DOM with all it’s goodness.</p><br><h3 id=\"view-encapsulation-none\" class=\"section-subheading\">ViewEncapsulation.None</h3><p>Angular doesn’t use Shadow DOM at all. Styles applied to our component are written to the document head.</p><br><xblog-code-panel><xblog-title>{{viewEncapsulationNone.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"viewEncapsulationNone.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"viewEncapsulationNone.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"viewEncapsulationNone.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>This also means that all the styles apply to the entire document.</p><p>In other words, a component could overwrite styles from another component because its styles are applied to the document head later.</p><br><p>This is the <strong>unscoped strategy</strong>.</p><br><h3 id=\"view-encapsulation-emulated\" class=\"section-subheading\">ViewEncapsulation.Emulated</h3><p>This view encapsulation is used by <strong>default</strong>.</p><p>It emulates style encapsulation, even if no Shadow DOM is available.</p><p>In case you want to use a third-party component that comes with styles that might affect your application, this is a very powerful feature for you.</p><br><p>We'll' reuse the example above, but change encapsulation to <span xblog-highlight>ViewEncapsulation.Emulated</span>.</p><br><xblog-code-panel><xblog-title>{{viewEncapsulationEmulated.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"viewEncapsulationEmulated.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"viewEncapsulationEmulated.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Here’s what the head looks like with the exact same component but different strategy.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"viewEncapsulationEmulated.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>Instead of the simple <span xblog-highlight>h1</span> selector that we used, Angular creates a <span xblog-highlight>h1[_ngcontent-ujj-3]</span> selector.</p><p>Angular added also some attributes to our component’s template as well! We see the <span xblog-highlight>_ngcontent-ujj-3</span> attribute which is also used in our rewritten CSS.</p><br><p>Since there’s no Shadow DOM, Angular has to write the styles to the head of the document.</p><p>But in order to enable scoped styles, Angular has to make sure that the component’s style selectors only match this particlar component and nothing else on the page.</p><p>That’s why it extends the CSS selectors, so they have a higher specificity and don’t collide with other selectors defined before at the same.</p><p>And of course, to make those selectors actually match, the elements in the template need to be extended as well.</p><br><h3 id=\"view-encapsulation-native\" class=\"section-subheading\">ViewEncapsulation.Native</h3><p>This one is super simple to understand since it basically just makes Angular using native Shadow DOM.</p><br><xblog-code-panel><xblog-title>{{viewEncapsulationNative.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"viewEncapsulationNative.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"viewEncapsulationNative.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>If we run our code in the browser, we see that no styles are written to the document head anymore. However, styles do now end up in the component’s template inside the shadow root.</p><br><div class=\"screen-capture\"><img [src]=\"viewEncapsulationNative.screenCaptures[1]\"></div>",
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