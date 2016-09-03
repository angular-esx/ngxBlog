export class BaseEnvt {
  constructor() {
    this.minify = false;
    this.distPath = './dist';
    this.jsPath = 'blog/js';
    this.cssPath = 'blog/css';
    this.imgPath = 'blog/resources/images';
    this.iconFontPath = 'blog/resources/icons/fonts';
    this.articlePath = 'blog/articles';
    this.blogPath = 'blog';
  }

  getJsDest(path) {
    return this.getDest(this.jsPath, path);
  }

  getCssDest(path) {
    return this.getDest(this.cssPath, path);
  }

  getImgDest(path) {
    return this.getDest(this.imgPath, path);
  }

  getIconFontDest(path) {
    return this.getDest(this.iconFontPath, path);
  }

  getArticleDest(path) {
    return this.getDest(this.articlePath, path);
  }

  getBlogDest(path) {
    return this.getDest(this.blogPath, path);
  }

  getDest(...args) {
    let _path = '';
    args.forEach(arg => { 
      if(arg){ _path += `/${arg}`; }
    });

    return `${this.distPath}${_path}`;
  }
}