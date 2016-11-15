import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1477835542Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477835542.html',
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