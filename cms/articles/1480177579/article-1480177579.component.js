import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';


export var article1480177579Component = Component({
  selector: 'article',
  templateUrl: './templates/article-1480177579.html',
  host: {
    '[class.xblog-article-1480177579]': 'true'
  }
})
  .Class({
    constructor: [
      DomSanitizer,
      xblogTableContentService,

      function (sanitizer, tableContentService) {
        this.id = 1480177579;
        this.sanitizer = sanitizer;
        this.tableContentService = tableContentService;
      }
    ],

    ngOnInit: function () {
      this.tableContents = this.tableContentService
        .getBuilder()
        .addHeadings([
          { id: 'simple-service', name: 'Simple Service' },
          { id: 'inject-service-to-component', name: 'Inject Service to Component' },
          { id: 'register-services-at-the-module-level', name: 'Register Services at the Module Level' },
        ])
        .build();

      this.examples = {
        simpleService: {
          sourceCode: {
            name: 'Simple Service',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
          },
          codeBlocks: this.getCodeBlock(simeplService)
        },
        injectServiceToComponent: {
          sourceCode: {
            name: 'Inject Service to Component',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
          },
          codeBlocks: this.getCodeBlock(injectServiceToComponent)
        },
        registerServicesAtTheModuleLevel: {
          sourceCode: {
            name: 'Register Services at the Module Level',
            link: resourceUtils.getGithubArticleFileLink(this.id, 'ng-on-init/child.component.js')
          },
          codeBlocks: this.getCodeBlock(registerServicesAtTheModuleLevel)
        }
      }
    },

    getCodeBlock: function (getter, lang) {
      var _langs = lang ? [lang] : ['javascript', 'html', 'css'];

      var _codeBlock = highlight.highlightAuto(getter().replace('\n', '').replace(/^    /gm, ''), _langs).value;

      return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
    }
  });

function simeplService() {
  return `
    import { Class } from '@angular/core';

    export const HeroService = Class({
      constructor: function() {
        this.heroes = [
          {
            id: 1,
            name: 'X-Men'
          },
          {
            id: 2,
            name: 'Spider Man'
          },
          ...
        ];
      }

      getHeroes: function() {
        return this.heroes;
      }
    });`;
}

function injectServiceToComponent() {
  return `
    import { HeroService } from './hero.service';

    export const HeroComponent = Component({
      ....
      providers: [ HeroService ]
    }).Class({
      constructor: [HeroService, function(heroService){
        this.heroService = heroService;
      }]

      getHeroes: function() {
        this.heroes = this.heroService.getHeroes();
      }
    });`;
}

function registerServicesAtTheModuleLevel() {
  return `
    /* AppModule */
    import { NgModule } from '@angular/core';
    import { HeroService } from './hero.service';

    export const AppModule = NgModule({
      ...
      providers: [ HeroService ] // You can put your services here!
    }).Class({
      constructor: function() {}
    });
    
    /* HeroComponent */
    import { HeroService } from './hero.service';

    export const HeroComponent = Component({
      ....
      // providers: [ HeroService ] 
      // we don't need register at providers because we registered at module level
    }).Class({
      constructor: [HeroService, function(heroService){
        this.heroService = heroService;
      }]

      getHeroes: function() {
        this.heroes = this.heroService.getHeroes();
      }
    });`;
}