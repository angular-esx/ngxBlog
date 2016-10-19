import { Class } from '@angular/core';

export var cmsArticleService = Class({
  constructor: function (){},

  getCodeBlock: function(id, fileName){
    return require('../../articles/' + id + '/code-blocks/' + fileName);
  }
});