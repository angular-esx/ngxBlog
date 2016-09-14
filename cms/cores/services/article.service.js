import * as ngCore from '@angular/core';

function _cmsArticleService(){
  this.constructor = function cmsArticleService(){};

  this.getCodeBlock = function(id, fileName){
    return require('../../articles/' + id + '/code-blocks/' + fileName);
  };
}

export var cmsArticleService = ngCore.Class(new _cmsArticleService());