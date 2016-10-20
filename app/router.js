import { NAVIGATIONS } from './models/navigation.model';

export var router = _initRoute();

function _initRoute(){
  var _configs = [];

  NAVIGATIONS.forEach(function(navigation){
    _configs.push(_createRoute(navigation));
    
    if(navigation.useAsDefault){
      _configs.push(_createIndexRoute(navigation));
    }
  });

  return _configs;
}

function _createIndexRoute(navigation){
  return {
    path: '',
    component: navigation.component
  };
}

function _createRoute(navigation){
  return {
    path: navigation.path,
    component: navigation.component
  };
}