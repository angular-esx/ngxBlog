export class BaseEnvt {
  constructor() {
    this.minify = false;
    this.distPath = './dist';
    this.jsPath = 'js';
    this.cssPath = 'css';
    this.imgPath = 'resources/images';
    this.iconFontPath = 'resources/icons/fonts';
    this.articlePath = 'articles';
  }

  getIndexDest()	{
    return 'index.html';
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

  getDest(...args) {
    let _path = '';
    args.forEach(arg => _path += `/${arg}`);

    return `${this.distPath}${_path}`;
  }
}