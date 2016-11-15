import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1477045370Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1477045370.html',
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