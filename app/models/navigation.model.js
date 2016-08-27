import { ngxUtils } from 'ngx-bootstrap/cores';

import { 
  homePage, 
  articlePage 
} from '../../pages';

export var NAVIGATIONS = [
  new _navigation('/home', 'Home', homePage, null, true),
  new _navigation('/article', 'Article', articlePage)
];

function _navigation(path, name, page, params, useAsDefault){
  this.path = path;
  this.name = name;
  this.component = page;
  this.params = params;
  this.useAsDefault = useAsDefault;

  this.getRouteLink = function(){
    var _routeLink = [this.name];

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

//export var postPage = _createPage('/post/:id/:title', 'post', 'postModule', ['id', 'title']);