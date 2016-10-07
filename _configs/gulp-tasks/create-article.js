import { BaseTask } from './base-task';
import { Envt } from '../envts';

export class CreateArticleTask extends BaseTask {
  run() {
    let _envt = new Envt(this.args);
    let _indent = { tabs: true, amount: 1 };

    let _id = Math.round(new Date().getTime() / 1000);
    let _title = this.args.title;
    let _dest = _envt.getCmsArticleDest(_id);

    if(!_title) { throw 'Title is required for an article'; }

    let _componentStream = this
    .file(`article-${_id}.component.js`, _getComponentFileContent(_id), { src: true })
    .pipe(this.gulp.dest(_dest));

    let _templateStream = this
    .file(`article-${_id}.html`, '', { src: true })
    .pipe(this.gulp.dest(`${_dest}/templates`));

    let _codeBlockStream = this
    .file(`code-block.html`, '', { src: true })
    .pipe(this.gulp.dest(`${_dest}/code-blocks`));

    let _indexStream = this
    .file(`index.js`, _getIndexFileContent(_id, _title), { src: true })
    .pipe(this.gulp.dest(_dest));

    return this.mergeStream(
      _componentStream,
      _codeBlockStream,
      _templateStream,
      _indexStream
    );
  }
}

function _getComponentFileContent(id) {
  return `import * as ngCore from '@angular/core';
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

  function _article${id}Component(){
    this.constructor = [
      DomSanitizationService,
      cmsArticleService,
      tableContentService,

      function article${id}Component(sanitizer, articleService, tableContentService){
        this.id = ${id};
        this.sanitizer = sanitizer;
        this.articleService = articleService;
        this.tableContentService = tableContentService;
      }
    ];

    this.ngOnInit = function() {
      this.tableContents = this.tableContentService
      .getBuilder()
      .addHeadings([
        { id: 'my-heading', name: 'My heading' }
      ])
      .addSubHeadings([
        { headingId: 'my-heading', id: 'my-subheading', name: 'My subheading' },
      ])
      .build();

      this.codeBlock = this.getCodeBlock('code-block.html');
    };

    this.getCodeBlock = function(fileName, lang) {
      var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

      var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
      _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

      return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
    };
  }

  export var article${id}Component = ngCore.Component({
    selector: 'article',
    templateUrl: './templates/article-${id}.html',
    directives: [ 
      CODE_PANEL_DIRECTIVES,
      HIGHLIGHT_DIRECTIVES,
      TABLE_CONTENT_DIRECTIVES
    ],
    providers: [ TABLE_CONTENT_PROVIDERS ],
    host: {
      '[class.xblog-article-${id}]': 'true'
    }
  })
  .Class(new _article${id}Component());
  `.replace(/^  /gm, '');
}

function _getIndexFileContent(id, title) {
  var _title = title.toLowerCase().trim().replace(new RegExp(' ', 'g'), '-');
  return `import { resourceUtils } from 'xblog-cores/utils';
  import { article${id}Component } from './article-${id}.component';

  export var article${id} = {
    id: ${id},
    title: '${title}',
    postedDate: '${new Date()}',
    author: '',
    cover: resourceUtils.getImg('xblog-home-cover.jpg'),
    routeLink: resourceUtils.getArticleRouteLink('${_title}-${id}.html'),
    relatedArticles: [],
    tags: [],
    description: '',
    content: article${id}Component,
  };
  `.replace(/^  /gm, '');
}