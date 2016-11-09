import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import highlight from 'highlight.js';

import { xblogTableContentService } from 'xblog-cores/modules';
import { resourceUtils } from 'xblog-cores/utils';

import { cmsArticleService } from '../../cores/services';


export var article1476538850Component = Component({
  selector: 'article',
  template: "<h2>NgModule</h2><p>In this post we are going to do an introduction to Angular 2 Modularity (the NgModule functionality) and understand why it enables several important features like ahead of time compilation and lazy loading. We will cover the following topics:</p><ul><li>What is an Angular 2 Module ?</li><li>Angular 2 Modules vs ES6 modules</li><li>Making modules more readable using the spread operator</li><li>Angular 2 Modules and Visibility</li><li>Angular 2 Modules and Dependency Injection - Avoid surprises</li><li>Dynamic bootstrapping and Just In Time compilation</li><li>The Angular 2 Ahead Of Time compiler in action</li><li>Static bootstrapping</li><li>Feature Modules</li></ul><h3>What is an Angular 2 Module ?</h3><p>The name Module can sometimes be an overloaded term in programming, but the use of the name \"Module\" for this new functionality is actually consistent with previous AngularJs terminology.</p><p>Angular 2 Modules are a close Angular 2 counterpart of AngularJs modules, so using the same term really helps making the transition smoother.</p><p>This is an example of an Angular 2 module, if defines the application module that we are about to use in our examples:</p>111<p>We can see here several things going on:</p><ul><li>the @NgModule annotation is what actually defines the module</li><li>we can list the components, directives and pipes that are part of the module in the declarations array</li><li>we can import other modules by listing them in the imports array</li><li>we can list the services that are part of the module in the providers array, but read further on why this should only be used in some cases</li><ul><p>Each application only has one root module, and each component, directive and pipe should only be associated to a single module.</p><p>Several things identify this as being a root module:</p><ul><li>the root module has the conventional name of AppModule</li><li>the root module in the case of web applications imports the BrowserModule, which for example provides Browser specific renderers, and installs core directives like ngIf, ngFor, etc.</li><li>the bootstrap property is used, providing a list of components that should be used as bootstrap entry points for the application. There is usually only one element in this array: the root component of the application</li></ul><p>We can see that this module can quickly grow to contain large arrays as the application grows. Before going further let's see how we can avoid this potential readability issue.</p><p>This declarative grouping is useful if for nothing else for organizing our view of the application and documenting which functionality is closely related.</p><p>But Angular 2 Modules are more than just documentation, what does Angular 2 exactly do with this information?</p><h3>Why are Angular 2 modules needed ?</h3><p>An Angular 2 module allows Angular to define a context for compiling templates. For example when Angular is parsing HTML templates, its looking for a certain list of components, directives and pipes.</p><p>Each HTML tag is compared to that list to see if a component should be applied on top of it, the same goes for each attribute. The problem is: how does Angular know which components, directives and pipes should it be looking for while parsing the HTML?</p><p>That is when Angular 2 modules come in, they provide that exact information in a single place.</p><p>So in summary we can say the following about Angular 2 modules:</p><ul><li>they are essential for template parsing, both in the Just In Time or Ahead Of Time Compilation scenarios as we will see</li><li>they are also very useful simply as documentation for grouping related functionality</li><li>They can be used to clarify which components and directives are meant to be used publicly vs internal implementation details, as we will soon see</li></ul><h3>Angular 2 Modules vs ES6 modules</h3><p>An Angular 2 Module is something very different than an ES6 module: An ES6 is a formalization of the typical Javascript module that the community has been using for many years: wrap private details in a closure and expose only the public API we want.</p><p>An Angular 2 Module is mainly a template compilation context but it also helps to define a public API for a subset of functionality as well as help with the dependency injection configuration of our application.</p><p>Angular 2 Modules are actually one of the main enablers for fast and mobile friendly applications, more on this further. Let's now go over the different types of modules and when they should be used.</p><h3>Angular 2 Modules and Visibility</h3><p>To understand how module visibility works in Angular 2, lets now define a separate module with only one component called <strong>Home</strong>:</p><p>222</p><p>Let's now try to use in our root module, by importing it:</p>333<p>You might be surprised to find out that this does not work. Even if you use the home component in your template, nothing will get rendered.</p><p>Why isn't the Home component visible ?</p><p>It turns out that adding Home to the declarations of HomeModule does not automatically make the component visible to any other modules that might be importing it.</p><p>This is because the Home Component might be just an implementation detail of the module that we don't want to make publicly available.</p><p>To make it publicly available, we need to export it:</p>444<p>With this, the Home component would now be correctly rendered in any template that uses the home HTML tag.</p><p>Notice that we could also have only exported it without adding it to declarations. This would happen in the case where the component is not used internally inside the module.</p><h3>Could we still import the component directly ?</h3><p>If we try to use a component directly that is not part of a module, we will get the following error:</p><p></p><p>Unhandled Promise rejection: Component Home is not part of any NgModule or the module has not been imported into your module.</p><p>This ensures that we only use components on our templates that have been declared as part of the public API of a given module.</p></ul></ul>",
  host: {
    '[class.xblog-article-1476538850]': 'true'
  }
})
.Class({
  constructor: [
    DomSanitizer,
    cmsArticleService,
    xblogTableContentService,

    function (sanitizer, articleService, tableContentService){
      this.id = 1476538850;
      this.sanitizer = sanitizer;
      this.articleService = articleService;
      this.tableContentService = tableContentService;
    }
  ],

  ngOnInit: function() {
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
  },

  getCodeBlock: function(fileName) {
    var _codeBlock = this.articleService.getCodeBlock(this.id, fileName); 
    _codeBlock = highlight.highlightAuto(_codeBlock, ['javascript']).value;
    return this.sanitizer.bypassSecurityTrustHtml(_codeBlock);
  }
});
