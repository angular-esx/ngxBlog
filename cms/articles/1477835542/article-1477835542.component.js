import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1477835542Component = Component({
  selector: 'article',
  template: "<p>As we've talked about <a [href]=\"references.templateDrivenFormsArticleLink\">Template-driven forms</a> in previous article, it provide us the way to create sophisticated forms while writing as little JavaScript as possible.</p><p>Now, it's time we'll talk about reactive/model-driven forms which makes our forms testable without a DOM being required.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"form-group-n-form-control\" class=\"section-heading\">FormGroup and FormControl</h2><p>Let’s start with a simple login form.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Next, we need to create a form model that represents that DOM structure in our component. One way to do that is to use the low level APIs for <span xblog-highlight>FormGroup</span> and <span xblog-highlight>FormControl</span>.</p><br><xblog-code-panel><xblog-title>{{reactiveForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"reactiveForms.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>We created a component property <span xblog-highlight>myForm</span> which represents the <span xblog-highlight>FormGroup</span>, which is our form. For each field in the form, we’ve created a <span xblog-highlight>FormControl</span>.</p><p>We also created two nested FormGroup <span xblog-highlight>name</span> and <span xblog-highlight>contact</span> which each of them is a collection of form controls.</p><br><p>We’ve just finished our first form model, let’s associate it to our template.</p><br><h2 id=\"form-group-n-form-group-name-n-form-control-name\" class=\"section-heading\">formGroup & formGroupName & formControlName</h2><p>By using <span xblog-highlight>formGroup</span> directive we can connect the model with the form template.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><p>By using <span xblog-highlight>formControlName</span> directive we can associate the form controls to the model as well.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[4]\"></xblog-code></xblog-code-panel><br><br><p>And last, by using <span xblog-highlight>formGroupName</span> directive we can associate a group of form controls to that model.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[5]\"></xblog-code></xblog-code-panel><br><br><p>Done, we've bound our form model to template completely.</p><p>Before show you how to add validators for our form controls, we should make code more readable by replacing <span xblog-highlight>FormGroup</span> and <span xblog-highlight>FormControl</span> with <span xblog-highlight>FormBuilder</span>.</p><br><h2 id=\"form-builder\" class=\"section-heading\">FormBuilder</h2><p><span xblog-highlight>FormBuilder</span> is like a factory that creates FormGroup and FormControl for us.</p><br><xblog-code-panel><xblog-title>{{reactiveForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"reactiveForms.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[6]\"></xblog-code></xblog-code-panel><br><br><p>This looks way better and we haven’t done any changes on the template.</p><p></p><h2 id=\"validators\" class=\"section-heading\">Validators</h2><p>It's time we should add validators to our form controls.</p><p>There are different ways to add them, we can either add them as directives to the template or to the <span xblog-highlight>FormControl</span> instance in our model.</p><br><xblog-code-panel><xblog-title>{{reactiveForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"reactiveForms.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[7]\"></xblog-code></xblog-code-panel><br><br><p>A <span xblog-highlight>FormControl</span> takes a value as first, a synchronous validator as second and an asynchronous validator as third parameter.</p><p>We can also pass a collection of validators which causes Angular to compose them for us.</p><br><p>Now, we can access the validity state of a form control like this.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[8]\"></xblog-code></xblog-code-panel><br><br><p>In Angular 2, you can also create custom validators, you can read the article <a [href]=\"references.customFormValidatorsArticleLink\">Custom Form Validators</a> to get knowledges about that.</p><br><h2 id=\"handle-changed-value-with-form-control\" class=\"section-heading\">Handle changed value with formControl</h2><p>In the last subject of this article, we want to show you a cool thing about <span xblog-highlight>formControl</span>.</p><p>First, we'll add a input to our form, name it <span xblog-highlight>address</span>. Assume that this input is an <span xblog-highlight>autocomplete</span>, it'll suggest addresses for users while they're typing.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[9]\"></xblog-code></xblog-code-panel><br><br><p>Actually, Angular comes with a directive <span xblog-highlight>formControl</span> which doesn’t have to be inside a <span xblog-highlight>formGroup</span>.</p><p>So we can listen reactively for changes that are happening to that control by subscribing to <span xblog-highlight>valuesChanges()</span> - An Observable property of formControl.</p><br><xblog-code-panel><xblog-title>{{reactiveForms.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"reactiveForms.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"reactiveForms.codeBlocks[10]\"></xblog-code></xblog-code-panel><br><br>",
  host: {
    '[class.xblog-article-1477835542]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1477835542;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.references = {
      templateDrivenFormsArticleLink: '#',
      customFormValidatorsArticleLink: '#'
    };

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'form-group-n-form-control', name: 'FormGroup and FormControl' },
      { id: 'form-group-n-form-group-name-n-form-control-name', name: 'formGroup & formGroupName & formControlName' },
      { id: 'form-builder', name: 'FormBuilder' },
      { id: 'validators', name: 'Validators' },
      { id: 'handle-changed-value-with-form-control', name: 'Handle changed value with formControl' }
    ])
    .build();

    this.reactiveForms = {
      sourceCode: {
        name: 'Reactive form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'reactive-forms')
      },
      codeBlocks: {
        1: this.getCodeBlock(getReactiveForm01),
        2: this.getCodeBlock(getReactiveForm02),
        3: this.getCodeBlock(getReactiveForm03),
        4: this.getCodeBlock(getReactiveForm04),
        5: this.getCodeBlock(getReactiveForm05),
        6: this.getCodeBlock(getFormBuilder),
        7: this.getCodeBlock(getFormValidator01),
        8: this.getCodeBlock(getFormValidator02),
        9: this.getCodeBlock(getFormControl01),
        10: this.getCodeBlock(getFormControl02)
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getReactiveForm01(){
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
    </form>`;
}

function getReactiveForm02(){
  return `
    import * as ngCore from '@angular/core';
    import {
      FormGroup,
      FormControl
    } from '@angular/forms';

    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      .....
      ngOnInit: function(){
        this.myForm = new FormGroup({
          name: new FormGroup({
            firstname: new FormControl(),
            lastname: new FormControl()
          }),
          contact: new FormGroup({
            email: new FormControl(),
            phone: new FormControl()
          })
        });
      }
    });`;
}

function getReactiveForm03(){
  return `
    <form [formGroup]="myForm">
      .....
    </form>`;
}

function getReactiveForm04(){
  return `
    <form [formGroup]="myForm">
      <label>Firstname:</label>
      <input type="text" formControlName="firstname">

      <label>Lastname:</label>
      <input type="text" formControlName="lastname">

      <label>Email:</label>
      <input type="text" formControlName="emal">

      <label>Phone:</label>
      <input type="text" formControlName="phone">
    </form>`;
}

function getReactiveForm05(){
  return `
    <form [formGroup]="myForm">
      <div formGroupName="name">
        <label>Firstname:</label>
        <input type="text" formControlName="firstname">

        <label>Lastname:</label>
        <input type="text" formControlName="lastname">
      </div>

      <div formGroupName="contact">
        <label>Email:</label>
        <input type="text" formControlName="emal">

        <label>Phone:</label>
        <input type="text" formControlName="phone">
      </div>
    </form>`;
}

function getFormBuilder(){
  return `
    import * as ngCore from '@angular/core';
    import {
      FormBuilder
    } from '@angular/forms';

    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      constructor: [
        FormBuilder,

        function(formBuilder){
          this.formBuilder = formBuilder;
        }
      ],

      ngOnInit: function(){
        this.myForm = this.formBuilder.group({
          name: this.formBuilder.group({
            firstname: 'Leon',
            lastname: 'Kennedy',
          }),
          contact: this.formBuilder.group({
            email: 'leon.kennedy@mail.com',
            phone: ''
          })
        });
      }
    });`;
}

function getFormValidator01(){
  return `
    import * as ngCore from '@angular/core';
    import {
      FormBuilder,
      Validators
    } from '@angular/forms';

    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      constructor: [
        FormBuilder,

        function(formBuilder){
          this.formBuilder = formBuilder;
        }
      ],

      ngOnInit: function(){
        this.myForm = this.formBuilder.group({
          name: this.formBuilder.group({
            firstname: ['Leon', Validators.required],
            lastname: ['Kennedy', Validators.required],
          }),
          contact: this.formBuilder.group({
            email: ['leon.kennedy@mail.com', Validators.required],
            phone: ''
          })
        });
      }
    });`;
}

function getFormValidator02(){
  return `
    <form [formGroup]="myForm">
      <div formGroupName="name">
        <div>
          <label>Firstname:</label>
          <input type="text" formControlName="firstname">
        </div>
        <div class="error-message" *ngIf="myForm.controls.name.controls.firstname.errors">
          Firstname is required
        </div>
        .....
      </div>
      .....
    </form>`;
}

function getFormControl01(){
  return `
    <form [formGroup]="myForm">
      .....
      <label>Address:</label>
      <input type="search" [formControl]="addressControl">
    </form>`;
}

function getFormControl02(){
  return `
    export var exampleComponent = ngCore.Component({
      .....
    })
    .Class({
      .....

      ngOnInit: function(){
        .....
        
        this.addressControl = new FormControl();
        this.addressControl.valueChanges.subscribe(function(value){
          console.log(value);
        });
      }
    });`;
}