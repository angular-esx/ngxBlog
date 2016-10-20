import { developSpaWebpack } from './spa-webpack.develop';
import { productionSpaWebpack } from './spa-webpack.production';

import { developPrerenderWebpack } from './prerender-webpack.develop';
import { productionPrerenderWebpack } from './prerender-webpack.production';

export let spaWebpackFactory = {
  getWebpack: function(options){
    if(!options.envt){ 
      return new developSpaWebpack(); 
    }
    else{
      switch(options.envt){
        case 'develop':
          return new developSpaWebpack();
        case 'production':
          return new productionSpaWebpack();
        default:
          throw `Not found webpack: ${options.envt}`;
      }
    }
  }
};

export let prerenderWebpackFactory = {
  getWebpack: function(options){
    if(!options.envt){ 
      return new developPrerenderWebpack(); 
    }
    else{
      switch(options.envt){
        case 'develop':
          return new developPrerenderWebpack();
        case 'production':
          return new productionPrerenderWebpack();
        default:
          throw `Not found webpack: ${options.envt}`;
      }
    }
  }
};