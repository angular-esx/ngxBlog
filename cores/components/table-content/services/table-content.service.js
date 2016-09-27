import * as ngCore from '@angular/core';

import { tableContentBuilder } from '../models/table-content.model';

function _tableContentService(){
  this.constructor = function tableContentService(){};

  this.getBuilder = function(){
    return new tableContentBuilder();
  };
}

export var tableContentService = ngCore.Class(new _tableContentService());