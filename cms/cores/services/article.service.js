import * as ngCore from '@angular/core';

export var cmsArticleService = ngCore.Class({
  constructor: function (){},

  getCodeBlock: function(id, fileName){
    return require('../../articles/' + id + '/code-blocks/' + fileName);
  }
});