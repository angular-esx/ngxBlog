import { bootstrap } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { prebootComplete } from 'angular2-universal';

import { application } from './app';
import { homeService, articleService } from '../pages';
import { router } from './router';

document.addEventListener('DOMContentLoaded', function(){
  bootstrap(application, [
    provideRouter(router),
    homeService,
    articleService
  ])
  .then(prebootComplete);
});