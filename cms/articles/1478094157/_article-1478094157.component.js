import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1478094157Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1478094157.html',
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