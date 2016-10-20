import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { prebootComplete } from 'angular2-universal';

import { xblogModule } from './app.module';

document.addEventListener('DOMContentLoaded', function(){
  platformBrowserDynamic()
  .bootstrapModule(xblogModule)
  .then(prebootComplete);
});