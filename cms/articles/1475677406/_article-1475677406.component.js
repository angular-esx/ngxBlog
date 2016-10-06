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

function _article1475677406Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,
    tableContentService,

    function article1475677406Component(sanitizer, articleService, tableContentService){
      this.id = 1475677406;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ];

  this.ngOnInit = function() {
    this.componentArticleLink = '#';

    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'ng2-shadow-dom', name: 'Shadow DOM in Angular 2' },
      { id: 'view-encapsulation-types', name: 'View encapsulation types' },
    ])
    .addSubHeadings([
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-none', name: 'ViewEncapsulation.None' },
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-emulated', name: 'ViewEncapsulation.Emulated' },
      { headingId: 'view-encapsulation-types', id: 'view-encapsulation-native', name: 'ViewEncapsulation.Native' },
    ])
    .build();

    this.viewEncapsulationNone = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-none/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock('view-encapsulation-none-1.html'),
        2: this.getCodeBlock('view-encapsulation-none-2.html')
      }
    };

    this.viewEncapsulationEmulated = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-emulated/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock('view-encapsulation-emulated-1.html'),
        2: this.getCodeBlock('view-encapsulation-emulated-2.html')
      }
    }; 

    this.viewEncapsulationNative = {
      sourceCode: {
        name: 'example.component.js',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'view-encapsulation-native/example.component.js')
      },
      codeBlocks: {
        1: this.getCodeBlock('view-encapsulation-native.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('viewEncapsulationNative-example-1475677406.png')
      }
    };
  };

  this.getCodeBlock = function(fileName, fileType) {
    var _fileTypes = fileType ? [ fileType ] : ['javascript', 'html', 'css'];

    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, _fileTypes).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  };
}

export var article1475677406Component = ngCore.Component({
  selector: 'article',
  templateUrl: './templates/article-1475677406.html',
  directives: [ 
    CODE_PANEL_DIRECTIVES,
    HIGHLIGHT_DIRECTIVES,
    TABLE_CONTENT_DIRECTIVES
  ],
  providers: [ TABLE_CONTENT_PROVIDERS ],
  host: {
    '[class.xblog-article-1475677406]': 'true'
  }
})
.Class(new _article1475677406Component());
