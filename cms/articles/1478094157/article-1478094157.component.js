import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1478094157Component = Component({
  selector: 'article',
  template: "<p>In previous articles about form in Angular 2. We've already shown you how to work with template-driven form & reactive form.</p><p>In this article, we would like to take it a step further and explore how to create custom form controls that integrate nicely with Angular's form APIs.</p><br><xblog-table-content [model]=\"tableContents\"><xblog-title><h5 class=\"section-subject\">Table of Contents</h5></xblog-title></xblog-table-content><br><h2 id=\"control-value-accessor\" class=\"section-heading\">ControlValueAccessor</h2><p>Well, before implement a custom form control, we need to get knowledges about <span xblog-highlight>ControlValueAccessor</span>. What's it ?</p><br><p>Exactly, a <span xblog-highlight>ControlValueAccessor</span> is an interface in Angular. It takes care of two important things:</p><br><p>- Writing a value from the form model into the view/DOM.</p><p>- Informing other form directives and controls when the view/DOM changes.</p><br><p>If you're familiar with OOP, when we said \"ControlValueAccessor is an interface\", we believe that you'll guess why Angular make it as an interface.</p><p>Yes, the reason is because the way how DOM elements need to be updated can vary across input types.</p><br><p>In the fact, there's a <span xblog-highlight>ControlValueAccessor</span> for every input type which knows how to update its view/DOM.</p><p>There’s the <span xblog-highlight>DefaultValueAccessor</span> that takes care of text inputs and textareas, the <span xblog-highlight>SelectControlValueAccessor</span> that handles select inputs, or the <span xblog-highlight>CheckboxControlValueAccessor</span> that deals with checkboxes, and many more.</p><br><p>The <span xblog-highlight>ControlValueAccessor</span> interface looks like this.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"controlValueAccessor.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p><strong>writeValue()</strong> is the method that writes a new value from the form model into the view or (if needed) DOM property.</p><br><p><strong>registerOnChange()</strong> is a method that registers a handler that should be called when something in the view has changed. It gets a function that tells other form directives and form controls to update their values.</p><br><p><strong>registerOnTouched()</strong> is a method that registers a handler specifically for when a control receives a touch event.</p><br><p>At this point, we hope that you understand what <span xblog-highlight>ControlValueAccessor</span> is, and what it does.</p><p>Next, let's implement our custom form control - <span xblog-highlight>counterInputComponent</span></p><br><h2 id=\"create-custom-form-control\" class=\"section-heading\">Create custom form control</h2><p>First, we'll create a simple counter as below. Nothing's special at here yet.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customFormControl.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>As you can see, our counter component's very simple. It displays current count and there're 2 buttons which allow us to increase or decrease count.</p><br><p>Now, it's time to implement the <span xblog-highlight>ControlValueAccessor</span> interface.</p><p>We'll implement <span xblog-highlight>writeValue()</span> to takes a new value from the form model then update the <span xblog-highlight>value</span> property of our counter component.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customFormControl.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>Next, we implement <span xblog-highlight>registerOnChange()</span>. This method has access to a function that informs the outside world about changes.</p><p>For <span xblog-highlight>registerOnTouched()</span> we'll implement it with an empty function because we don't want to do anything at this event.</p><br><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customFormControl.codeBlocks[3]\"></xblog-code></xblog-code-panel><br><br><h2 id=\"register-custom-form-control\" class=\"section-heading\">Register custom form control</h2><p>At this point, we've implemented the <span xblog-highlight>ControlValueAccessor</span> interface completely. The final step we need to do is register it on on the <span xblog-highlight>NG_VALUE_ACCESSOR</span> token.</p><br><p>As you know, there's the <span xblog-highlight>NG_VALIDATORS</span> token that gives Angular all registered validators on a form control, and we can add our own validators to it.</p><p>For custom form controls, Anuglar does same. Angular internaly injects all values that are registered on the <span xblog-highlight>NG_VALUE_ACCESSOR</span> token. So all we need to do is to extend the multi-provider for <span xblog-highlight>NG_VALUE_ACCESSOR</span> with our own value accessor instance.</p><br><xblog-code-panel type=\"no-header\"><xblog-code [innerHtml]=\"customFormControl.codeBlocks[4]\"></xblog-code></xblog-code-panel><br><br><p>If you're strange with the way we declared provide in the above example, please read below article, we've explained detail in that article.</p><br><h2 id=\"use-custom-form-control\" class=\"section-heading\">Use custom control in Angular form</h2><p>We've finished <span xblog-highlight>counterInputComponent</span> There're code blocks below show you how to use it in Angular form.</p><br><p>Use <span xblog-highlight>counterInputComponent</span> in template-driven form.</p><br><xblog-code-panel><xblog-title>{{templateDrivenForm.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"templateDrivenForm.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"templateDrivenForm.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>Use <span xblog-highlight>counterInputComponent</span> in reactive form.</p><br><xblog-code-panel><xblog-title>{{reactiveForm.sourceCode.name}}</xblog-title><a xblog-source-code [href]=\"reactiveForm.sourceCode.link\">full code</a><xblog-code [innerHtml]=\"reactiveForm.codeBlocks[1]\"></xblog-code></xblog-code-panel><br>",
  host: {
    '[class.xblog-article-1478094157]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1478094157;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'control-value-accessor', name: 'ControlValueAccessor' },
      { id: 'create-custom-form-control', name: 'Create custom form control' },
      { id: 'register-custom-form-control', name: 'Register custom form control' },
      { id: 'use-custom-form-control', name: 'Use custom control in Angular form' },
    ])
    .build();

    this.controlValueAccessor = {
      codeBlocks: {
        1: this.getCodeBlock(getControlValueAccessor)
      }
    };

    this.customFormControl = {
      codeBlocks: {
        1: this.getCodeBlock(getCustomFormControl01),
        2: this.getCodeBlock(getCustomFormControl02),
        3: this.getCodeBlock(getCustomFormControl03),
        4: this.getCodeBlock(getCustomFormControl04)
      }
    };

    this.templateDrivenForm = {
      sourceCode: {
        name: 'custom-controls-for-template-driven-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-controls-for-template-driven-form')
      },
      codeBlocks: {
        1: this.getCodeBlock(getTemplateDrivenForm)
      }
    };

    this.reactiveForm = {
      sourceCode: {
        name: 'custom-controls-for-reactive-form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-controls-for-reactive-form')
      },
      codeBlocks: {
        1: this.getCodeBlock(getReactiveForm)
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getControlValueAccessor(){
  return `
    export interface ControlValueAccessor {
      writeValue(obj: any) : void
      registerOnChange(fn: any) : void
      registerOnTouched(fn: any) : void
    }`;
}

function getCustomFormControl01(){
  return `
    import { Component } from '@angular/core';


    export var counterInputComponent = Component({
      selector: 'counter-input',
      template: [
        '<button (click)="increment()">+</button>',
          '{{value}}',
        '<button (click)="decrement()">-</button>'
      ].join('')
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.value = 0;
      },

      increment: function() {
        this.value++;
        this.onChange(this.value);
      },

      decrement: function() {
        this.value--;
        this.onChange(this.value);
      }
    });`;
}

function getCustomFormControl02(){
  return `
    export var counterInputComponent = Component({.....})
    .Class({
      .....
      writeValue: function(value) {
        if(value !== undefined){ this.value = value; }
      }
    });`;
}

function getCustomFormControl03(){
  return `
    export var counterInputComponent = Component({.....})
    .Class({
      .....
      registerOnChange: function(fnc) {
        this.onChange = fnc;
      },

      registerOnTouched: function() {},

      increment: function() {
        this.value++;
        this.onChange(this.value);
      },

      decrement: function() {
        this.value--;
        this.onChange(this.value);
      }
    });`;
}

function getCustomFormControl04(){
  return `
    import { Component, forwardRef } from '@angular/core';
    import { NG_VALUE_ACCESSOR } from '@angular/forms';

    export var counterInputComponent = Component({
      providers: [
        { 
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(function() { return counterInputComponent; }),
          multi: true
        }
      ]
    })
    .Class({.....});`;
}

function getTemplateDrivenForm(){
  return `
    import { Component } from '@angular/core';


    export var exampleComponent = Component({
      selector: 'my-example',
      template: [
        '<p>ngModel value: {{value}}</p>',
        '<counter-input name="counter" [(ngModel)]="value"></counter-input>'
      ].join('')
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.value = 2;
      }
    });`;
}

function getReactiveForm(){
  return `
    import { Component } from '@angular/core';
    import { FormBuilder } from '@angular/forms';


    export var exampleComponent = Component({
      selector: 'my-example',
      template: [
        '<p>Counter value: {{form.value.counter}}</p>',
        '<form [formGroup]="form">',
          '<counter-input formControlName="counter"></counter-input>',
        '</form>'
      ].join('')
    })
    .Class({
      constructor: [
        FormBuilder,

        function(formBuilder){
          this.formBuilder = formBuilder;
        }
      ],

      ngOnInit: function(){
        this.form = this.formBuilder.group({
          counter: 2
        });
      }
    });`;
}