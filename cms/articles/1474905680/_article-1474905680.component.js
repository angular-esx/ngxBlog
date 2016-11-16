import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1474905680Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1474905680.html',
  host: {
    '[class.xblog-article-1474905680]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    xblogTableContentService,

    function (sanitizer, tableContentService){
      this.id = 1474905680;
      this.sanitizer = sanitizer;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.pipeArticleLink = '#'

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
        1: this.getCodeBlock(getInterpolation),
      }
    }; 

    this.templateRefVariable = {
      sourceCode: {
        name: 'TemplateRef variable',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'template-ref-variable/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock(getTemplateRefVariable),
      },
      screenCaptures: {
        1: resourceUtils.getImg('templateRefVariable-example-1474905680.png')
      }
    }; 

    this.pipeOperator = {
      codeBlocks: {
        1: this.getCodeBlock(getPipeOperator01),
        2: this.getCodeBlock(getPipeOperator02),
        3: this.getCodeBlock(getPipeOperator03),
      }
    }; 

    this.safeNavOperator = {
      sourceCode: {
        name: 'Safe Navigation Operator',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'safe-nav-operator/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock(getSafeNavOperator),
      }
    };
  },

  getCodeBlock: function(getter, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});

function getInterpolation(){
  return `
    <div>
      <h1>{{title}}</h1>
      <img src="{{imageUrl}}">
    </div>`;
}

function getTemplateRefVariable(){
  return `
    <input #email>
    <button (click)="print(email.value)">Print</button>`;
}

function getPipeOperator01(){
  return `<div>{{title | uppercase}}</div>`;
}

function getPipeOperator02(){
  return `<div>{{title | uppercase | lowercase}}</div>`;
}

function getPipeOperator03(){
  return `<div>{{currentDate | date:'longDate'}}</div>`;
}

function getSafeNavOperator(){
  return `
    export var exampleComponent = ngCore.Component({
      selector: 'my-example',
      template: [
        '<h1>Safe Navigation Operator</h1>',
        '<div>{{datasource[0].project?.category?.name}}</div>',
        '<div>{{datasource[1].project?.category?.name}}</div>'
      ].join('')
    })
    .Class({
      constructor: function(){},

      ngOnInit: function(){
        this.datasource = [
          {
            project: { category: { name: 'project 1' } }
          },
          {
            project: { category: null }
          }
        ];
      }
    });`;
}