import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1477045370Component = Component({
  selector: 'article',
  template: "<p>Angular comes with two different ways of building forms in our applications.</p><p>There’s the template-driven approach which allows us to build forms without writing javascript so much.</p><p>Then there’s <a [href]=\"references.modelDrivenFormsArticleLink\">the model-driven/reactive approach</a> which makes our forms testable without a DOM being required.</p><p>In this article, we'll focus on template-driven forms.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"ng-form\" class=\"section-heading\">ngForm directive</h2><p>Let’s start with a simple login form.</p><br><xblog-code-panel><xblog-title>{{templateDrivenForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForms.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>At here, there's spacial one that Angular comes with a directive <span xblog-highlight>ngForm</span> that matches the <span xblog-highlight>&lt;form&gt;</span> selector, so in fact, our form element already has an instance of ngForm applied.</p><p>The <span xblog-highlight>ngForm</span> directive holds additional features which help us to get information about the current state of the form including:</p><br><p>- A JSON representation of the form value.</p><p>- Validity state of the entire form.</p><br><p>As you know, you can expose directive instances in a component’s template using the <span xblog-highlight>exportAs</span> property of the directive metadata. If you haven't known about it yet, <a [href]=\"references.componentArticleLink\">read a our previous article</a>.</p><p><span xblog-highlight>ngForm</span> directive also is exposed as <span xblog-highlight>ngForm</span>, which means we can get an instance of our form without writing any application code like this:</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>Next, we need to tell the form that the input controls are part of. This is where <span xblog-highlight>ngModel</span> comes into play.</p><br><h2 id=\"ng-model\" class=\"section-heading\">ngModel directive</h2><p>We'll use <span xblog-highlight>ngModel</span> to do two-way binding. In combination with a <span xblog-highlight>name</span> attribute, internally Angular creates <span xblog-highlight>FormControls</span> and registers them with an <span xblog-highlight>NgForm</span>.</p><p>Every form control that is registered will automatically show up in <span xblog-highlight>form.value</span> and can then easily be used for further post processing.</p><br><xblog-code-panel><xblog-title>{{templateDrivenForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForms.sourceCode.link\" rel=\"nofollow\">full code</a><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><p>In code snippet above, we also bind a event handler <span xblog-highlight>onSubmit</span> to <span xblog-highlight>ngSubmit</span>. We'll detail about ngSubmit later, at this point, if we input something then submit the form, this is result from <span xblog-highlight>form.value</span>.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[6]\"></xblog-code></xblog-code-panel><br><br><p>It look good, but how about if we need a JSON object with structure as below before send it to remote server.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[7]\"></xblog-code></xblog-code-panel><br><br><p>Do we must build this structure manually ourself ? Actually, Angular has a way to cover it for us - introducing <span xblog-highlight>ngModelGroup</span>.</p><br><h2 id=\"ng-model-group\" class=\"section-heading\">ngModelGroup directive</h2><p><span xblog-highlight>ngModelGroup</span> enables us to semantically group our form controls.</p><p>This comes in very handy if we want to check the validity state of just a sub set of the form.</p><br><xblog-code-panel><xblog-title>{{templateDrivenForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForms.sourceCode.link\" rel=\"nofollow\">full code</a><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[8]\"></xblog-code></xblog-code-panel><br><br><p>We now get the wanted object structure out of our form without writing any application code. Awesome!</p><br><h2 id=\"track-change-state\" class=\"section-heading\">Track change-state</h2><p>Using <span xblog-highlight>ngModel</span> in a form gives us more than just two way data binding. It also tells us if the user touched the control, if the value changed, or if the value became invalid by updating the control with special Angular CSS classes that reflect the state.</p><br><xblog-table><ngx-grid xblog-table-width=\"36rem\"><ngx-grid-row xblog-table-header><ngx-grid-col size=\"xs-4\">State</ngx-grid-col><ngx-grid-col size=\"xs-4\">Class if true</ngx-grid-col><ngx-grid-col size=\"xs-4\">Class if false</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">Control has been visited</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-touched</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-untouched</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">Control's value has changed</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-dirty</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-pristine</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">Control's value is valid</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-valid</ngx-grid-col><ngx-grid-col size=\"xs-4\">ng-invalid</ngx-grid-col></ngx-grid-row></ngx-grid></xblog-table><br><p>Turn back our form, now we'll implement validation for it. There're 3 steps we need to follow:</p><br><p>- Put a <strong>Html5 validation</strong> to the form control.</p><p>- Put a <a [href]=\"references.templateSyntaxArticleLink\">template reference variable</a> to the form control then bind ngModel to it.</p><p>- Using the template reference variable which is put to the form control to write condition for showing error messages.</p><br><xblog-code-panel><xblog-title>{{templateDrivenForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForms.sourceCode.link\" rel=\"nofollow\">full code</a><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[4]\"></xblog-code></xblog-code-panel><br><br><p>In this example, we hide the message when the control is <span xblog-highlight>valid</span> or <span xblog-highlight>pristine</span>; pristine means the user hasn't changed the value since it was displayed in this form.</p><br><h2 id=\"ng-submit\" class=\"section-heading\">ngSubmit directive</h2><p>At this point, we're ready to submit the form. Look back our form, you can see we're using <span xblog-highlight>ngSubmit</span>. There's a reason we decide to use it at there.</p><p>Because <span xblog-highlight>ngSubmit</span> ensures that the form doesn’t submit when the handler code throws and causes an actual http post request, so we should use it as this is the best practice.</p><br><p>We can now use the template reference variable <span xblog-highlight>form</span> to access the form’s value and it’s validity state.</p><p>In order to get JSON object, we pass <span xblog-highlight>form.value</span> as a argument to the handler <span xblog-highlight>onSubmit</span>. We also use <span xblog-highlight>form.valid</span> to disable submit button if there's any form control is still invalid.</p><br><br><xblog-code-panel><xblog-title>{{templateDrivenForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForms.sourceCode.link\" rel=\"nofollow\">full code</a><xblog-code [innerHtml]=\"templateDrivenForms.codeBlocks[5]\"></xblog-code></xblog-code-panel><br><br>",
  host: {
    '[class.xblog-article-1477045370]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1477045370;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      modelDrivenFormsArticleLink: '#',
      componentArticleLink: '#',
      templateSyntaxArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng-form', name: 'ngForm directive' },
      { id: 'ng-model', name: 'ngModel directive' },
      { id: 'ng-model-group', name: 'ngModelGroup directive' },
      { id: 'track-change-state', name: 'Track change-state' },
      { id: 'ng-submit', name: 'ngSubmit directive' }
    ])
    .build();

    this.templateDrivenForms = {
      sourceCode: {
        name: 'Template-driven form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'template-driven-forms')
      },
      codeBlocks: {
        1: this.getCodeBlock(getFormTemplate01),
        2: this.getCodeBlock(getFormTemplate02),
        3: this.getCodeBlock(getFormTemplate03),
        4: this.getCodeBlock(getFormTemplate04),
        5: this.getCodeBlock(getFormTemplate05),
        6: this.getCodeBlock(getFormValue01, 'json'),
        7: this.getCodeBlock(getFormValue02, 'json'),
        8: this.getCodeBlock(getFormModelGroup)
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getFormTemplate01(){
  return `
    <form>
      <label>Firstname:</label>
      <input type="text">

      <label>Lastname:</label>
      <input type="text">

      <label>Email:</label>
      <input type="text">

      <label>Phone:</label>
      <input type="text">

      <button type="submit">Submit</button>
    </form>`;
}

function getFormTemplate02(){
  return `
    <form #form="ngForm">
      .....
    </form>`;
}

function getFormTemplate03(){
  return `
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
      <label>Firstname:</label>
      <input type="text" name="firstname" [(ngModel)]="model.firstname">

      <label>Lastname:</label>
      <input type="text" name="lastname" [(ngModel)]="model.lastname">

      <label>Email:</label >
      <input type="text" name="email" [(ngModel)]="model.email">

      <label>Phone:</label>
      <input type="text" name="phone" [(ngModel)]="model.phone">

      <button type="submit">Submit</button>
    </form>`;
}

function getFormTemplate04(){
  return `
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
      <label>Firstname:</label>
      <input type="text" name="firstname" 
        [(ngModel)]="model.firstname"
        #firstname="ngModel"
        required
      >
      <div class="error-message" [hidden]="firstname.valid || firstname.pristine">
        Firstname is required
      </div>
      .....
    </form>`;
}

function getFormTemplate05(){
  return `
    <form #form="ngForm" (ngSubmit)="onSubmit(form.value)">
      .....
      <button type="submit" [disabled]="!form.valid">Submit</button>
    </form>`;
}

function getFormValue01(){
  return `
    {
      firstname: 'Leon',
      lastname: 'Kennedy',
      email: 'leon.kennedy@mail.com',
      phone: '0123456789'
    }`;
}

function getFormValue02(){
  return `
    {
      name: {
        firstname: 'Leon',
        lastname: 'Kennedy'
      },
      contact: {
        email: 'leon.kennedy@mail.com',
        phone: '0123456789'
      }
    }`;
}

function getFormModelGroup(){
  return `
    <form (ngSubmit)="onSubmit(form.value)">
      <div ngModelGroup="name">
        <label>Firstname:</label>
        <input type="text" name="firstname" [(ngModel)]="model.firstname">

        <label>Lastname:</label>
        <input type="text" name="lastname" [(ngModel)]="model.lastname">
      </div>

      <div ngModelGroup="contact">
        <label>Email:</label >
        <input type="text" name="email" [(ngModel)]="model.email">

        <label>Phone:</label>
        <input type="text" name="phone" [(ngModel)]="model.phone">
      </div>

      <button type="submit">Submit</button>
    </form>`;
}