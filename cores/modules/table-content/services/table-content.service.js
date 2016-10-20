import { Class } from '@angular/core';

import { xblogTableContentBuilder } from '../models/table-content.model';

export var xblogTableContentService = Class({
  constructor: function(){},

  getBuilder: function(){
    return new xblogTableContentBuilder();
  }
});