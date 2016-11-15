import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1477889733Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477889733.html',
  host: {
    '[class.xblog-article-1477889733]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1477889733;
      this.sanitizer = sanitizer;
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
        name: 'Custom validatorfor in reactive form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validator-for-reactive-form')
      },
      codeBlocks: {
        1: this.getCodeBlock(getCustomValidatorForReactiveForm01),
        2: this.getCodeBlock(getCustomValidatorForReactiveForm02)
      }
    };

    this.customValidatorForTemplateDrivenForm = {
      sourceCode: {
        name: 'Custom validator in template-driven form',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'custom-validator-for-template-driven-form')
      },
      codeBlocks: {
        1: this.getCodeBlock(getCustomValidatorForTemplateDrivenForm01),
        2: this.getCodeBlock(getCustomValidatorForTemplateDrivenForm02),
        3: this.getCodeBlock(getCustomValidatorForTemplateDrivenForm03),
        4: this.getCodeBlock(getCustomValidatorForTemplateDrivenForm04)
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
  
function getCustomValidatorForReactiveForm01(){
  return `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

    export var appModule = NgModule({
      imports: [BrowserModule, ReactiveFormsModule],
      .....
    })
    .Class({
      constructor: [
        FormBuilder,

        function(formBuilder){
          this.formBuilder = formBuilder;
        }
      ],

      ngOnInit: function() {
        this.myForm = this.formBuilder.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', Validators.pattern(.....)], // Email regex is here
          address: ['', [ Validators.minLength(3), Validators.maxLength(50) ]]
        });
      }
    });

    /*--------------------------------------------------------------*/

    <form [formGroup]="myform">
      .....
    </form>`;
}

function getCustomValidatorForReactiveForm02(){
  return `
    import * as ngCore from '@angular/core';

    export var emailValidator = ngCore.Class({
      constructor: function(){},

      validate: function(formControl) {
        var EMAIL_REGEXP = ...;

        return EMAIL_REGEXP.test(formControl.value) ? null : {
          emailValidator: {
            valid: false
          }
        };
      }
    });

    /*--------------------------------------------------------------*/

    import { emailValidator } from '.....';

    .....

    ngOnInit: function() {
      this.myForm = this.formBuilder.group({
        .....
        email: ['', new emailValidator().validate]
      });
    }`;
}

function getCustomValidatorForTemplateDrivenForm01(){
  return `
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule } from '@angular/forms';

    export var appModule = NgModule({
      imports: [BrowserModule, FormsModule],
      .....
    })
    .Class({ ..... });

    /*--------------------------------------------------------------*/

    <form>
      <input type="text" name="firstname" ngModel required>
      <input type="text" name="lastname" ngModel required>
      <input type="text" name="email" ngModel pattern="....."> // Email regex is here
      <input type="text" name="address" ngModel minlength="3" maxlength="50">
    </form>`;
}

function getCustomValidatorForTemplateDrivenForm02(){
  return `
    import * as ngCore from '@angular/core';

    export var emailValidator = ngCore.Directive({
      selector: '[emailValidator][ngModel],[emailValidator][formControl]',
    })
    .Class({
      constructor: function(){},

      validate: function(formControl) {
        var EMAIL_REGEXP = ...;

        return EMAIL_REGEXP.test(formControl.value) ? null : {
          emailValidator: {
            valid: false
          }
        };
      }
    });`;
}

function getCustomValidatorForTemplateDrivenForm03(){
  return `
    import { NG_VALIDATORS } from '@angular/forms';

    export var emailValidator = ngCore.Directive({
      selector: '[emailValidator][ngModel],[emailValidator][formControl]',
      providers: [
        { provide: NG_VALIDATORS, useExisting: emailValidator, multi: true }
      ]
    })
    .Class({.....});`;
}

function getCustomValidatorForTemplateDrivenForm04(){
  return `
    import { NG_VALIDATORS } from '@angular/forms';

    export var emailValidator = ngCore.Directive({
      selector: '[emailValidator][ngModel],[emailValidator][formControl]',
      providers: [
        { provide: NG_VALIDATORS, useExisting: ngCore.forwardRef(function(){ return emailValidator; }), multi: true }
      ]
    })
    .Class({.....});`;
}