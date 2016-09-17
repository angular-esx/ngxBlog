import * as ngCore from '@angular/core';
import { DomSanitizationService } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { NGX_GRID_DIRECTIVES } from 'ngx-bootstrap/components';

import { 
  CODE_PANEL_DIRECTIVES,
  HIGHLIGHT_DIRECTIVES
} from 'xblog-cores/components';
import { resourceUtils } from 'xblog-cores/utils';
import { cmsArticleService } from '../../cores/services';

function _article1473861890Component(){
  this.constructor = [
    DomSanitizationService,
    cmsArticleService,

    function article1473861890Component(sanitizer, articleService){
      this.id = 1473861890;
      this.sanitizer = sanitizer;
      this.articleService = articleService;

      this.ngOnChanges = {
        sourceCode: {
          exampleComponent: {
            name: 'example.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-changes/example.component.js')
          }
        },
        screenCaptures: {
          1: resourceUtils.getImg('ngOnChanges-example-1473861890.png')
        },
        codeBlocks: {
          1: this.getCodeBlock('ng-on-changes.html')
        }
      };

      this.ngOnInit = {
        sourceCode: {
          childComponent: {
            name: 'child.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
          }
        },
        screenCaptures: {
          1: resourceUtils.getImg('ngOnInit-example-1473861890.png')
        },
        codeBlocks: {
          1: this.getCodeBlock('ng-on-init.html')
        }
      };

      this.ngDoCheck = {
        sourceCode: {
          childComponent: {
            name: 'child.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-do-check/child.component.js')
          }
        },
        screenCaptures: {
          1: resourceUtils.getImg('ngDoCheck-example-1473861890.png')
        },
        codeBlocks: {
          1: this.getCodeBlock('ng-do-check.html')
        }
      };

      this.ngAfterContent = {
        sourceCode: {
          childComponent: {
            name: 'child.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/child.component.js')
          },
          exampleComponent: {
            name: 'example.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-content/example.component.js')
          }
        },
        screenCaptures: {
          1: resourceUtils.getImg('ngAfterContent-example-1473861890.png')
        },
        codeBlocks: {
          1: this.getCodeBlock('ng-after-content-1.html'),
          2: this.getCodeBlock('ng-after-content-2.html')
        }
      };

      this.ngAfterView = {
        sourceCode: {
          exampleComponent: {
            name: 'example.component.js',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-after-view/example.component.js')
          }
        },
        screenCaptures: {
          1: resourceUtils.getImg('ngAfterView-example-1473861890.png')
        },
        codeBlocks: {
          1: this.getCodeBlock('ng-after-view.html')
        }
      };
    }
  ];

  this.getCodeBlock = function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  };
}

export var article1473861890Component = ngCore.Component({
  selector: 'article',
  template: "<p>In previous articles, you've alreadry gotten knowledges about directives/components.</p><p>Go on with a subject relate to them, I'll show you their lifecycle.</p><br><p>A component has a lifecycle managed by Angular itself.</p><p>Angular offers component lifecycle hooks that give us the ability to act when they occur.</p><p>No directive or component will implement all of them and some of the hooks only make sense for components.</p><br><p>After component's constructor is called to create an instance, Angular calls its lifecycle hook methods in following sequence.</p><p>Angular only calls a hook method if it is defined.</p><br><ngx-grid><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnChanges</ngx-grid-col><ngx-grid-col size=\"xs-8\">Before ngOnInit and when a data-bound input property value changes.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After the first ngOnChanges.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngDoCheck</ngx-grid-col><ngx-grid-col size=\"xs-8\">During every Angular change detection cycle.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterContentInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After projecting content into the component.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterContentChecked</ngx-grid-col><ngx-grid-col size=\"xs-8\">After every check of projected component content.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterViewInit</ngx-grid-col><ngx-grid-col size=\"xs-8\">After initializing the component's views and child views.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngAfterViewChecked</ngx-grid-col><ngx-grid-col size=\"xs-8\">After every check of the component's views and child views.</ngx-grid-col></ngx-grid-row><ngx-grid-row><ngx-grid-col size=\"xs-4\">ngOnDestroy</ngx-grid-col><ngx-grid-col size=\"xs-8\">Just before Angular destroys the directive/component.</ngx-grid-col></ngx-grid-row></ngx-grid><br><p>We'll detail each lifecycle hook and find out how we should work with them</p><p><br><h2 class=\"section-heading\">ngOnChanges</h2><p>This hook method executes before ngOnInit and when a data-bound input property value changes.</p><p>The method receives a object of current and previous values, I call it is <span xblog-highlight>changeRecord</span></p><br><p>For example, I have <span xblog-highlight>ngOnChangesComponent</span> as below</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngOnChanges.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngOnChanges.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngOnChanges.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>There're 2 binding, <span xblog-highlight>title</span> is a primitive value, <span xblog-highlight>model</span> is an object</p><p>Because I bound data to <span xblog-highlight>childComponent</span> so after its constructor executed, its <span xblog-highlight>ngOnChanges</span> will be fired.</p><p>3 seconds later, its ngOnChanges fires one more time because I've changed data-bound property values</p><p>As you see the below image, although ngOnChanges fires twice, but its <span xblog-highlight>changeRecord</span> is not same.</p><p>In the second changes, changeRecord only contains current and previous values of <span xblog-highlight>title</span></p><p>The value of <span xblog-highlight>model</span> property is the reference to the object. Angular doesn't care if any its property's value changed.</p><p>If you really want Angular to fire ngOnChanges for every changes of model. <a href=\"https://facebook.github.io/immutable-js/\" rel=\"nofollow\">Immutable</a> will be a solution for you</p><br><div class=\"screen-capture\"><img [src]=\"ngOnChanges.screenCaptures[1]\"></div><br><h2 class=\"section-heading\">ngOnInit</h2><p>This hook method executes after the first ngOnChanges</p><p>We turn to ngOnInit for 2 reasons</p><p>- To perform complex initializations shortly after construction</p><p>- To set up the component after Angular sets the input properties</p><br><p>Why shouldn't we fetch data from server in the constructor ? Because data-bound input properties only are set after construction.</p><p>If you fetch data with params which base on values of input properties, make sure you will get errors.</p><p>The constructor should do no more than set the initial local variables to simple values.</p><br><p>Look at the example with <span xblog-highlight>childComponent</span></p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngOnInit.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngOnInit.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngOnInit.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>And this is a screen capture for result</p><br><div class=\"screen-capture\"><img [src]=\"ngOnInit.screenCaptures[1]\"></div><br><h2 class=\"section-heading\">ngDoCheck</h2><p>It is called with enormous frequency, Angular fires it after every change detection cycle no matter where the change occurred</p><p>Look at below sample, when you type something into textbox ngDoCheck will be called.</p><p>Even, you move out of textbox, it's also called.</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngDoCheck.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngDoCheck.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngDoCheck.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><div class=\"screen-capture\"><img [src]=\"ngDoCheck.screenCaptures[1]\"></div><br><p>Clearly, if you decide to implement your logic in there, make sure implementation must be very lightweight or the user experience may suffer</p><br><h2 class=\"section-heading\">ngAfterContent</h2><p>The <span xblog-highlight>ngAfterContentInit</span> and <span xblog-highlight>ngAfterContentChecked</span> hooks that Angular calls after Angular projects external content into the component.</p><p>Angular calls both ngAfterContent hooks before calling either of the ngAfterView hooks.</p><br><p>The hooks take action based on changing values in a content child which we can only reach by querying for it via <span xblog-highlight>ContentChild</span></p><p>The ngAfterContent hooks concern <span xblog-highlight>ContentChildren</span>, the child components that Angular projected into the component</p><br><p>Using <span xblog-highlight>ng-content</span> is a way to import Html from outside the component and insert content into component's template in a designated spot</p><br><p>I have an exemple with <span xblog-highlight>childComponent</span> which use <span xblog-highlight>ng-content</span> like this</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngAfterContent.sourceCode.childComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterContent.sourceCode.childComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterContent.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><p>In <span xblog-highlight>exampleComponent</span> I've' projected <span xblog-highlight>titleComponent</span> and <span xblog-highlight>itemComponent</span> into childComponent like this</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngAfterContent.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterContent.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterContent.codeBlocks[2]\"></xblog-code></xblog-code-panel><br><br><p>So you can see result in the below image, I've queried instances of titleComponent & itemComponent</p><br><div class=\"screen-capture\"><img [src]=\"ngAfterContent.screenCaptures[1]\"></div><br><p>Notice that, Angular completes composition of the projected content before finishing the composition of this component's view.</p><p>We still have a window of opportunity to modify that view.</p><br><h2 class=\"section-heading\">ngAfterView</h2><p>The <span xblog-highlight>ngAfterViewInit</span> and <span xblog-highlight>ngAfterViewChecked</span> execute after initializing the component's views and child views</p><br><p>The hooks take action based on changing values within the child view which we can only reach by querying for the child view via <span xblog-highlight>ViewChild</span></p><p>The AfterView hooks concern <span xblog-highlight>ViewChildren</span>, the child components whose element tags appear within the component's template.</p><br><p>Have a look at <span xblog-highlight>exampleComponent</span> & the result below</p><br><xblog-code-panel lang=\"javascript\"><xblog-title>{{ngAfterView.sourceCode.exampleComponent.name}}</xblog-title><a xblog-source-code [href]=\"ngAfterView.sourceCode.exampleComponent.link\">Full Code</a><xblog-code [innerHtml]=\"ngAfterView.codeBlocks[1]\"></xblog-code></xblog-code-panel><br><br><div class=\"screen-capture\"><img [src]=\"ngAfterView.screenCaptures[1]\"></div><br><p>Do you see I used <span xblog-highlight>setTimeout()</span> in the example ?</p><p>If you try to update component's data-bound property immediately instead of using setTimeout, Angular throws an error.</p><br><p>Notice that we must adhere to Angular's unidirectional data flow rule which says that we may not update the view after it has been composed.</p><p>Both hooks fire after the component's view has been composed.</p><br><p>For <span xblog-highlight>ngAfterViewChecked</span>, Angular frequently calls it, even when there are no changes of interest. Write lean hook methods to avoid performance problems</p><br><h2 class=\"section-heading\">ngOnDestroy</h2><p>This hook run just before Angular destroys the directive/component.</p><p>This is the place to free resources that won't be garbage collected automatically</p><p>Such as Unsubscribe from observables and DOM events. Stop interval timers etc</p>",
  styles: [":host(.xblog-article-1473861890)>ngx-grid{font-size:.75rem;padding:1rem;background-color:#fff;box-shadow:0 1px 4px 0 rgba(0,0,0,0.14)}:host(.xblog-article-1473861890)>ngx-grid>ngx-grid-row:not(:last-child){border-bottom:1px solid #eceeef}:host(.xblog-article-1473861890)>ngx-grid>ngx-grid-row>ngx-grid-col{padding:1rem}"],
  directives: [ 
    NGX_GRID_DIRECTIVES,
    CODE_PANEL_DIRECTIVES,
    HIGHLIGHT_DIRECTIVES
  ],
  host: {
    '[class.xblog-article-1473861890]': 'true'
  }
})
.Class(new _article1473861890Component());
