import * as ngCore from '@angular/core';

import { tableContentBuilder } from '../models/table-content.model';

export var tableContentService = ngCore.Class({
  constructor: function(){},

  getBuilder: function(){
    return new tableContentBuilder();
  }
});