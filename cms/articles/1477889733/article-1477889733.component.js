import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1477889733Component = Component({
  selector: 'article',
  template: "<p>Although, Angular 2 provides us a couple of built-in form validators, we often need to add some custom validation capabilities to our application's form.</p><p>In this article, we'll explore how to do that easily.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"built-in-form-validators\" class=\"section-heading\">Built-in form validators</h2><p>Angular comes with a subset of built-in form validators. We can apply them either declaratively as directives on elements in case we're building a <strong>template-driven form</strong>, or imperatively using the APIs in case we're building a <strong>reactive forms</strong></p><br><p>The supported built-in validators, at the time of writing this article:</p><br><p><strong>- required</strong> Requires a form control to have a non-empty value</p><p><strong>- minlength</strong> Requires a form control to have a value of a minimum length</p><p><strong>- maxlength</strong> Requires a form control to have a value of a maximum length</p><p><strong>- pattern</strong> Requires a form control’s value to match a given regex</p><br><p>For template-driven form, validators can be applied by simply using their corresponding directives like this:</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customValidatorForTemplateDrivenForm.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>For reactive form, validators can be applied to form controls like this:</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customValidatorForReactiveForm.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>That're two ways we can applied built-in validators to our form. Now, let's build our own custom email validator.</p><br><h2 id=\"custom-form-validator\" class=\"section-heading\">Custom form validator</h2><p>in order to implement <span xblog-highlight>emailValidator</span>, all we need to do is to define a function that takes a <span xblog-highlight>FormControl</span>, checks if it’s value matches the regex of an email address, and if not, returns an error object, or null in case the value is valid.</p><p>Then we can apply it to our form same the way which we have done with built-in validators in case we're buiding a reactive form.</p><br><xblog-code-panel><xblog-title>{{customValidatorForReactiveForm.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"customValidatorForReactiveForm.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"customValidatorForReactiveForm.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>So how can we apply our custom validator for a template-driven form ? Well, we'll get the answer in next subject.</p><br><h2 id=\"custom-form-validator-directive\" class=\"section-heading\">Custom form validator directive</h2><p>An absolute thing that we need a directive to enable our validator to be used in template-driven forms. It mean we have to apply directive metadata to our <span xblog-highlight>emailValidator</span></p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customValidatorForTemplateDrivenForm.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>Next, there's a cool thing, we want to show you about the mechanism which Angular uses to execute validators on a form control.</p><br><p>Angular has an internal mechanism to execute validators on a form control. It maintains a multi provider for a dependency token called <span xblog-highlight>NG_VALIDATORS</span></p><br><p>It turns out that all built-in validators are already added to the <span xblog-highlight>NG_VALIDATORS</span> token. So whenever Angular instantiates a form control and performs validation, it basically injects the dependency for the <span xblog-highlight>NG_VALIDATORS</span> token, which is a list of all validators, and executes them one by one on that form control.</p><br><p>Understood about the validation mechanism which Angular does. we guess you know what we'll' do next. Yes, we'll add our validator to the <span xblog-highlight>NG_VALIDATORS</span> by using <span xblog-highlight>provide</span></p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customValidatorForTemplateDrivenForm.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><p>Note here, you can see we use <span xblog-highlight>useExisting</span>, right ? Because we've already added <span xblog-highlight>emailValidator</span> to the <span xblog-highlight>declarations</span> property of our module, so We want to make sure that we get the exact same instance of <span xblog-highlight>emailValidator</span> on our form control, even though, we define a new provider for it.</p><br><p>However, at this point, our custom validator still doesn't work.</p><p>We're referencing a token which is undefined because the class definition itself happens later in the code. That’s where <span xblog-highlight>forwardRef()</span> comes into play.</p><br><xblog-code-panel><xblog-title>{{customValidatorForTemplateDrivenForm.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"customValidatorForTemplateDrivenForm.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"customValidatorForTemplateDrivenForm.codeBlocks[4]\"></xblog-code></xblog-code-panel><br><br>",
  host: {
    '[class.xblog-article-1477889733]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1477889733;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'built-in-form-validators', name: 'Built-in form validators' },
      { id: 'custom-form-validator', name: 'Custom form validator' },
      { id: 'custom-form-validator-directive', name: 'Custom form validator directive' },
    ])
    .build();

    this.customValidatorForReactiveForm = {
      sourceCode: {
        name: 'custom-validatorfor-reactive-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validatorfor-reactive-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('custom-validator-for-reactive-form-1.html'),
        2: this.getCodeBlock('custom-validator-for-reactive-form-2.html')
      }
    };

    this.customValidatorForTemplateDrivenForm = {
      sourceCode: {
        name: 'custom-validator-for-template-driven-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validator-for-template-driven-form')
      },
      codeBlocks: {
        1: this.getCodeBlock('custom-validator-for-template-driven-form-1.html'),
        2: this.getCodeBlock('custom-validator-for-template-driven-form-2.html'),
        3: this.getCodeBlock('custom-validator-for-template-driven-form-3.html'),
        4: this.getCodeBlock('custom-validator-for-template-driven-form-4.html')
      }
    };
  },

  getCodeBlock: function(fileName, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  