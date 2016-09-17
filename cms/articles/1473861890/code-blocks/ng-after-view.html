import * as ngCore from '@angular/core';

import { childComponent } from './child.component';

function _ngAfterViewComponent (){
  this.constructor = function ngAfterViewComponent(){};

  this.ngOnInit = function() {
    this.items = [
      { id: 1, name: 'item 01' },
      { id: 2, name: 'item 02' }
    ];
    this.noChangeCount = 0;
  };

  this.ngAfterViewInit = function(){
    //title & childs will be available since there
    this.title.nativeElement.innerHTML = 'ngAfterView';
    console.log('title', this.title.nativeElement);
    console.log('childs', this.items);
  };

  this.ngAfterViewChecked = function(){
    // If there're changes to ViewChild 
    // ViewChild is updated at there after the view has been checked
    // This event is fired after every check of the component's views and child views.
    var _self = this;
    setTimeout(function(){ 
      if(!_self.noChangeCount){ _self.noChangeCount++; } 
    });
  };
}

export var ngAfterViewComponent = ngCore.Component({
  selector: 'my-example',
  template: [
    '<h1 #title></h1>',
    '<my-child *ngFor="let item of items" [item]="item"></my-child>',
    '<div>ngAfterViewChecked is fired: {{noChangeCount}}x</div>'
  ].join(''),
  directives: [ childComponent ],
  queries: {
    title: new ngCore.ViewChild('title',  { read: ngCore.ElementRef }),
    childs: new ngCore.ViewChildren(childComponent)
  }
})
.Class(new _ngAfterViewComponent());