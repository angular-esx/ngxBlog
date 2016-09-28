import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { 
  CODE_PANEL_DIRECTIVES,
  HIGHLIGHT_DIRECTIVES,
  TABLE_CONTENT_DIRECTIVES,
  TABLE_CONTENT_PROVIDERS,
  tableContentService,
} from 'xblog-cores/components';
import { resourceUtils } from 'xblog-cores/utils';
import { cmsArticleService } from '../../cores/services';

function _article1474905680Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,
    tableContentService,

    function article1474905680Component(sanitizer, articleService, tableContentService){
      this.id = 1474905680;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ];

  this.ngOnInit = function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'interpolation', name: 'Interpolation' },
      { id: 'template-expressions', name: 'Template expressions' },
      { id: 'template-statements', name: 'Template statements' },
      { id: 'template-reference-variables', name: 'Template reference variables' },
      { id: 'template-expression-operators', name: 'Template expression operators' }
    ])
    .addSubHeadings([
      { headingId: 'template-expressions', id: 'expression-context', name: 'Expression context' },
      { headingId: 'template-expressions', id: 'expression-guidelines', name: 'Expression guidelines' },
      { headingId: 'template-statements', id: 'statement-context', name: 'Statement context' },
      { headingId: 'template-statements', id: 'statement-guidelines', name: 'Statement guidelines' },
      { headingId: 'template-expression-operators', id: 'the-pipe-operator', name: 'The pipe operator ( | )' },
      { headingId: 'template-expression-operators', id: 'the-safe-navigation-operator', name: 'The safe navigation operator ( ?. )' }
    ])
    .build();

    this.interpolation = {
      codeBlocks: {
        1: this.getCodeBlock('interpolation.html'),
      }
    }; 

    this.templateRefVariable = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'template-ref-variable/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock('template-ref-variable.html'),
      },
      screenCaptures: {
        1: resourceUtils.getImg('templateRefVariable-example-1474905680.png')
      }
    }; 

    this.pipeOperator = {
      codeBlocks: {
        1: this.getCodeBlock('pipe-operator-1.html'),
        2: this.getCodeBlock('pipe-operator-2.html'),
        3: this.getCodeBlock('pipe-operator-3.html'),
      },
      references: {
        pipeArticle: '#'
      }
    }; 

    this.safeNavOperator = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'safe-nav-operator/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock('safe-nav-operator.html'),
      }
    };
  };

  this.getCodeBlock = function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  };
}

export var article1474905680Component = ngCore.Component({
  selector: 'article',
  template: "<p>In Angular, the component plays the part of the controller/viewmodel, and the template represents the view.</p><p>Our Angular application manages what the user sees and can do, achieving this through the interaction of a Component class instance and its user-facing template.</p><br><p>Almost all HTML syntax is valid template syntax, some legal HTML doesn’t make much sense in a template.</p><p>The <span xblog-highlight>&lt;html&gt;</span>, <span xblog-highlight>&lt;body&gt;</span>, and <span xblog-highlight>&lt;base&gt;</span> elements have no useful role in our repertoire.</p><p>The <span xblog-highlight>&lt;script&gt;</span> element is a notable exception, it is forbidden, eliminating the risk of script injection attacks.</p><br><p>We can extend the HTML vocabulary of our templates with components and directives that appear as new elements and attributes.</p><p>Let’s find out what it takes to write a template for our view.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"interpolation\" class=\"section-heading\">Interpolation</h2><p>We use interpolation to weave calculated strings into the text between HTML element tags and within attribute assignments.</p><br><xblog-code-panel lang=\"javascript\" type=\"no-header\"><xblog-code [innerHtml]=\"interpolation.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>The material between the braces is often the name of a component property. More generally, the material between the braces is a template expression that Angular first evaluates and then replaces that name with the string value of the corresponding component property.</p><br><h2 id=\"template-expressions\" class=\"section-heading\">Template expressions</h2><p>A template expression produces a value. Angular executes the expression and assigns it to a property of a binding target, the target might be an HTML element, a component, or a directive.</p><br><p>We write template expressions in a language that looks like JavaScript. Many JavaScript expressions are legal template expressions, but not all.</p><br><p>JavaScript expressions that have or promote side effects are prohibited, including:</p><p>- Assignments (=, +=, -=, ...)</p><p>- New</p><p>- Chaining expressions with ; or ,</p><p>- Increment and decrement operators (++ and --)</p><br><p>Other notable differences from JavaScript syntax include:</p><p>- No support for the bitwise operators | and &</p><p>- New template expression operators, such as | and ?.</p><br><h3 id=\"expression-context\" class=\"section-subheading\">Expression context</h3><p>Template expressions cannot refer to anything in the global namespace. They can’t refer to <span xblog-highlight>window</span> or <span xblog-highlight>document</span>. They can’t call <span xblog-highlight>console.log</span> or <span xblog-highlight>Math.max</span>. They are restricted to referencing members of the expression context.</p><br><p>The expression context is typically the component instance, which is the source of binding values.</p><p>The expression context can include objects other than the component such as a <a href=\"/#template-reference-variables\">template reference variable</a></p><br><h3 id=\"expression-guidelines\" class=\"section-subheading\">Expression guidelines</h3><p>There're guidelines you should follow while using template expressions</p><br><h5 class=\"section-subject\">No visible side effects</h5><p>A template expression should not change any application state other than the value of the target property.</p><p>This rule is essential to Angular's \"unidirectional data flow\" policy.</p><br><h5 class=\"section-subject\">Quick execution</h5><p>Angular executes template expressions more often than we think. They can be called after every keypress or mouse move.</p><p>Expressions should finish quickly or the user experience may drag.</p><p>Consider caching values computed from other values when the computation is expensive.</p><br><h5 class=\"section-subject\">Simplicity</h5><p>Although it's possible to write quite complex template expressions, we really shouldn't.</p><p>A property name or method call should be the norm. An occasional Boolean negation (!) is OK</p><br><h5 class=\"section-subject\">Idempotence</h5><p>An idempotent expression is ideal because it is free of side effects and improves Angular's change detection performance.</p><br><p>If an idempotent expression returns a string or a number, it returns the same string or number when called twice in a row. If the expression returns an object (including an Array), it returns the same object reference when called twice in a row.</p><br><h2 id=\"template-statements\" class=\"section-heading\">Template statements</h2><p>A template statement responds to an event raised by a binding target such as an element, component, or directive.</p><p>Responding to events is the other side of Angular's \"unidirectional data flow\". We're free to change anything, anywhere, during this turn of the event loop.</p><br><p>Like template expressions, template statements use a language that looks like JavaScript. The template statement parser is different than the template expression parser and specifically supports both basic assignment (=) and chaining expressions (with ; or ,)</p><br><p>However, certain JavaScript syntax is not allowed:</p><p>- New</p><p>- Increment and decrement operators, ++ and --</p><p>- Operator assignment, such as += and -=</p><p>- The bitwise operators | and &</p><p>- The template expression operators</p><br><h3 id=\"statement-context\" class=\"section-subheading\">Statement context</h3><p>As with template expressions, Template statements cannot refer to anything in the global namespace.</p><p>statements can refer only to what's in the statement context — typically the component instance to which we're binding the event.</p><br><p>The statement context may include an object other than the component. A <a href=\"/#template-reference-variables\">template reference variable</a> is one such alternative context object.</p><br><h3 id=\"statement-guidelines\" class=\"section-subheading\">Statement guidelines</h3><p>As with template expressions, avoid writing complex template statements. A method call or simple property assignment should be the norm.</p><br><h2 id=\"template-reference-variables\" class=\"section-heading\">Template reference variables</h2><p>A template reference variable is a reference to a DOM element or directive within a template.</p><br><p>It can be used with native DOM elements but also with Angular components — in fact, it will work with any custom web component.</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{templateRefVariable.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateRefVariable.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"templateRefVariable.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>We using the hash <span xblog-highlight>(#)</span> prefix to defining a variable.</p><p>If yoy don't like using the # character can use its canonical alternative, the <span xblog-highlight>ref-</span> prefix.</p><br><div class=\"screen-capture\"><img [src]=\"templateRefVariable.screenCaptures[1]\"></div><br><h2 id=\"template-expression-operators\" class=\"section-heading\">Template expression operators</h2><p>The template expression language employs a subset of JavaScript syntax supplemented with a few special operators for specific scenarios.</p><p>We'll cover two of these operators: pipe and safe navigation operator.</p><br><h3 id=\"the-pipe-operator\" class=\"section-subheading\">The pipe operator ( | )</h3><p>The result of an expression might require some transformation before we’re ready to use it in a binding.</p><p>Pipes are simple functions that accept an input value and return a transformed value. They're easy to apply within template expressions, using the pipe operator <span xblog-highlight>( | )</span></p><br><p>For example, we might want to uppercase a title with pipe like this</p><br><xblog-code-panel lang=\"javascript\" type=\"no-header\"><xblog-code [innerHtml]=\"pipeOperator.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>We can chain expressions through multiple pipes</p><br><xblog-code-panel lang=\"javascript\" type=\"no-header\"><xblog-code [innerHtml]=\"pipeOperator.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>We can also apply parameters to a pipe</p><br><xblog-code-panel lang=\"javascript\" type=\"no-header\"><xblog-code [innerHtml]=\"pipeOperator.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><p>Moreover, Angular allow you to create custom pipes yourself simply, read <a [href]=\"pipeOperator.references.pipeArticle\">this article</a> to know how you can do that</p><br><h3 id=\"the-safe-navigation-operator\" class=\"section-subheading\">The safe navigation operator ( ?. )</h3><p>The Angular safe navigation operator <span xblog-highlight>(?.)</span> is a fluent and convenient way to guard against null and undefined values in property paths.</p><p>The expression bails out when it hits the first null value. The display is blank, but the app keeps rolling without errors.</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{safeNavOperator.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"safeNavOperator.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"safeNavOperator.codeBlocks[1]\"></xblog-code></xblog-code-panel>",
  directives: [ 
    CODE_PANEL_DIRECTIVES,
    HIGHLIGHT_DIRECTIVES,
    TABLE_CONTENT_DIRECTIVES
  ],
  providers: [ TABLE_CONTENT_PROVIDERS ],
  host: {
    '[class.xblog-article-1474905680]': 'true'
  }
})
.Class(new _article1474905680Component());
