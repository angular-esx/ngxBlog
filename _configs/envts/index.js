import { baseEnvt } from './_envt';
import { deverlopEnvt } from './envt.develop';
import { productionEnvt } from './envt.production';

export let envtFactory = {
  getEnvt: function(options){
    if(!options.envt){ 
      return new deverlopEnvt(); 
    }
    else{
      switch(options.envt){
        case 'develop':
          return new deverlopEnvt();
        case 'production':
          return new productionEnvt();
        default:
          throw `Not found envt: ${options.envt}`;
      }
    }
  }
};