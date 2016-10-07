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

function _article1474380939Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,

    function article1474380939Component(sanitizer, articleService){
      this.id = 1474380939;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
    }
  ];

  this.ngOnInit = function() {
    this.simpleDI = {
      sourceCode: {
        name: 'simple-di',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'simple-di')
      },
      codeBlocks: {
        1: this.getCodeBlock('simple-di.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('simpleDI-example-1474380939.png')
      }
    };

    this.classProvider = {
      sourceCode: {
        name: 'class-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'class-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('class-provider-1.html'),
        2: this.getCodeBlock('class-provider-2.html'),
        3: this.getCodeBlock('class-provider-3.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('classProvider-example-1474380939.png')
      }
    };

    this.valueProvider = {
      sourceCode: {
        name: 'value-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'value-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('value-provider-1.html'),
        2: this.getCodeBlock('value-provider-2.html')
      }
    };

    this.factoryProvider = {
      sourceCode: {
        name: 'factory-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'factory-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('factory-provider.html')
      }
    };

    this.optionalDependency = {
      sourceCode: {
        name: 'optional-dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'optional-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock('optional-dependency.html')
      }
    };

    this.hostDependency = {
      sourceCode: {
        name: 'host-dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'host-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock('host-dependency.html')
      }
    };

    this.dependencyVisibility = {
      sourceCode: {
        name: 'dependency-visibility',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'dependency-visibility')
      },
      codeBlocks: {
        1: this.getCodeBlock('dependency-visibility.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('dependencyVisibility-example-1474380939.png')
      }
    };
  };

  this.getCodeBlock = function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  };
}

export var article1474380939Component = ngCore.Component({
  selector: 'article',
  templateUrl: './templates/article-1474380939.html',
  directives: [ 
    CODE_PANEL_DIRECTIVES,
    HIGHLIGHT_DIRECTIVES,
    TABLE_CONTENT_DIRECTIVES
  ],
  providers: [ TABLE_CONTENT_PROVIDERS ],
  host: {
    '[class.xblog-article-1474380939]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizationService,
    cmsArticleService,
    tableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1474380939;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
    this.tableContents = this.tableContentService
    .getBuilder()
    .addHeadings([
      { id: 'injector-providers', name: 'Injector providers' },
      { id: 'class-provider', name: 'Class provider' },
      { id: 'value-provider', name: 'Value provider' },
      { id: 'factory-provider', name: 'Factory provider' },
      { id: 'optional-dependencies', name: 'Optional dependencies' },
      { id: 'dependency-visibility', name: 'Dependency visibility' },
      { id: 'restricting-dependency-lookup', name: 'Restricting dependency lookup' },
    ])
    .build();

    this.simpleDI = {
      sourceCode: {
        name: 'simple-di',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'simple-di')
      },
      codeBlocks: {
        1: this.getCodeBlock('simple-di.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('simpleDI-example-1474380939.png')
      }
    };

    this.classProvider = {
      sourceCode: {
        name: 'class-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'class-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('class-provider-1.html'),
        2: this.getCodeBlock('class-provider-2.html'),
        3: this.getCodeBlock('class-provider-3.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('classProvider-example-1474380939.png')
      }
    };

    this.valueProvider = {
      sourceCode: {
        name: 'value-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'value-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('value-provider-1.html'),
        2: this.getCodeBlock('value-provider-2.html')
      }
    };

    this.factoryProvider = {
      sourceCode: {
        name: 'factory-provider',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'factory-provider')
      },
      codeBlocks: {
        1: this.getCodeBlock('factory-provider.html')
      }
    };

    this.optionalDependency = {
      sourceCode: {
        name: 'optional-dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'optional-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock('optional-dependency.html')
      }
    };

    this.hostDependency = {
      sourceCode: {
        name: 'host-dependency',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'host-dependency')
      },
      codeBlocks: {
        1: this.getCodeBlock('host-dependency.html')
      }
    };

    this.dependencyVisibility = {
      sourceCode: {
        name: 'dependency-visibility',
        link: resourceUtils.getGithubArticleFileLink(this.id, 'dependency-visibility')
      },
      codeBlocks: {
        1: this.getCodeBlock('dependency-visibility.html')
      },
      screenCaptures: {
        1: resourceUtils.getImg('dependencyVisibility-example-1474380939.png')
      }
    };
  },

  getCodeBlock: function(fileName, lang) {
    var _langs = lang ? [ lang ] : ['javascript', 'html', 'css'];

    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, _langs).value;

    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
