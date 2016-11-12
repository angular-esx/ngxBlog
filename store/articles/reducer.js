import { ARTICLE_STORE } from 'xblog-cms/articles';


export function xblogArticlesReducer(state, action) {
  if(!state) { state = ARTICLE_STORE; }

  return state;
}

export var xblogArticlesSelectors = {
  getList,
  getMap
};


function getList(state$) {
  return state$.select(function(state){ return state.LIST; });
}

function getMap(state$) {
  return state$.select(function(state){ return state.MAP; });
}