import { ngxUtils } from 'ngx-framework/cores';

import { 
  xblogHomePage, 
  xblogArticlePage 
} from '../../pages';

export var NAVIGATIONS = [
  new _navigation('blog/articles/:pageNum/index.html', xblogHomePage, null, true),
  new _navigation('blog/articles/:id', xblogArticlePage)
];

function _navigation(path, page, params, useAsDefault){
  this.path = path;
  this.component = page;
  this.params = params;
  this.useAsDefault = useAsDefault;

  this.getRouteLink = function(){
    var _routeLink = [this.path];

    if(params && arguments){
      if(params.length !== arguments.length){ throw 'Required params arent enough'; }

      var _params = {};
      ngxUtils.forEach(this.params, function(name, index){
        _params[name] = arguments[index]
                        .toLowerCase()
                        .trim()
                        .replace(new RegExp(' ', 'g'), '-');
      });

      _routeLink.push(_params);
    }

    return _routeLink;
  };
}