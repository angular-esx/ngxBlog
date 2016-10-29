import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';

import { 
  xblogArticlesReducer,
  xblogArticlesSelectors
} from './articles'


export function xblogReducer(state, action) {
  return combineReducers({
    articles: xblogArticlesReducer
  })(state, action);
}

export var xblogArticleStore = _buildStore(xblogArticlesSelectors, _getArticleState$);


function _getArticleState$(state$) { 
  return state$.select(function(state){ return state.articles; }); 
}

function _buildStore(selectors, getState$){
  var _store = {};

  Object.keys(selectors).forEach(function(key){
    _store[key] = compose(selectors[key], getState$);
  });

  return _store;
}