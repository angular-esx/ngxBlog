import { baseSpaWebpack } from './_spa-webpack';

export class developSpaWebpack extends baseSpaWebpack {
  constructor() {
    super();

    this.devtool = 'source-map';
  }
}