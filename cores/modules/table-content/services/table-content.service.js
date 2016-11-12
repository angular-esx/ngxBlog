import { Class } from '@angular/core';

import { xblogTableContentBuilder } from '../models/table-content.model';

export var xblogTableContentService = Class({
  constructor: function xblogTableContentService(){},

  getBuilder: function(){
    return new xblogTableContentBuilder();
  }
});