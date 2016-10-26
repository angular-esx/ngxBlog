import { baseTask } from './base-task';

import fs from 'fs';
import { sassConfig } from '../sass/sass-config';

const _COMPONENT_SRCS = [
  './bower_components/ngx/projects/ngx-framework/modules/navbar/navbar.component.js',
  './bower_components/ngx/projects/ngx-framework/modules/jumbotron/jumbotron.component.js',
  './bower_components/ngx/projects/ngx-framework/modules/grid/grid.component.js',
  './bower_components/ngx/projects/ngx-framework/modules/card/card-header.component.js',
  './bower_components/ngx/projects/ngx-framework/modules/card/card.component.js',

  './cores/modules/navbar/navbar.component.js',
  './cores/modules/header/header.component.js',
  './cores/modules/footer/footer.component.js',
  './cores/modules/post/post.component.js',
  './cores/modules/code-panel/code-panel.component.js',
  './cores/modules/table-content/table-content.component.js',

  './pages/home/home.page.js',
  './pages/home/shared/cores/post/post.component.js',
  './pages/home/shared/vendors/card/card.component.js',
  './pages/home/shared/vendors/grid/grid.component.js',
  './pages/home/shared/vendors/navbar/navbar.component.js',

  './pages/article/article.page.js',
  './pages/article/shared/cores/post/post.component.js',
  './pages/article/shared/cores/code-panel/code-panel.component.js',
  './pages/article/shared/vendors/card/card.component.js',
  './pages/article/shared/vendors/grid/grid.component.js',
  './pages/article/shared/vendors/navbar/navbar.component.js'
];

const _INCLUDE_PATHS = new sassConfig().includePaths;

export class prebuildTask extends baseTask {
  run() {
    let _stream = [];

    if(this.args.article) {
      let _articleId = this.args.article;
      _COMPONENT_SRCS.push(`./cms/articles/${_articleId}/article-${_articleId}.component.js`);
    }

    _COMPONENT_SRCS.forEach(src => {
      if(_existingPrebuildFile(src)){
        _stream.push(_getPrebuildStream(this, _getOriginComponentSrc(src)));
      }
      else{
        let _dest = src.split('/');
        let _originComponentFileName = _dest.pop();
        _dest = _dest.join('/');

        _stream.push(this.mergeStream(
          _writePrebuildFileStream(this, src, _dest),

          _getPrebuildStream(this, src, true)
        ));
      }
    }, this);

    return this.mergeStream(_stream);
  }
}

function _getPrebuildStream(context, src, isFirstPrebuild) {
  let _dest = src.split('/');
  let _output = _dest.pop().replace('_', '');
  _dest = _dest.join('/');

  let _stream = context.gulp.src(src);

  if(isFirstPrebuild){
    _stream = _stream
    .pipe(context.rename(`_${_output}`))
    .pipe(context.gulp.dest(_dest));
  }

  return _stream
  .pipe(context.inlineNg2Template({
    target: 'es5', 
    useRelativePaths: true,
    removeLineBreaks: true,
    templateProcessor: (path, ext, file, callback) => {
      Promise.resolve(context.htmlMinifier.minify(file, {
        caseSensitive: true,
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true
      }))
      .then(minifiedFile => callback(null, minifiedFile))
      .catch(ex => callback(ex));
    },
    styleProcessor: (path, ext, file, callback) => {
      context.nodeSass.render({
        file: path,
        includePaths: _INCLUDE_PATHS,
        outputStyle: 'compressed'
      }, 
      (ex, result) => {
        if(ex){ console.log(ex); }
        callback(ex, result ? result.css : null);
      });
    }
  }))
  .pipe(context.rename(_output))
  .pipe(context.gulp.dest(_dest));
}

function _existingPrebuildFile(src){
  try
  {
    let _prebuildFile = src.replace('.js', '.prebuild.json');

    return fs.statSync(_prebuildFile).isFile();
  }
  catch(ex) {
    return false;
  }
}

function _getOriginComponentSrc(src) {
  let _src = src.split('/');
  let _originComponentFileName = `_${_src.pop()}`;
  
  _src.push(_originComponentFileName);
  return _src.join('/');
}

function _writePrebuildFileStream(context, src, dest) {
  let _content = {
    origin: _getOriginComponentSrc(src),
    inline: src
  };

  let _prebuildFile = src.split('/').pop().replace('.js', '.prebuild.json');

  return context
  .file(_prebuildFile, JSON.stringify(_content, 0 , 2), { src: true })
  .pipe(context.gulp.dest(dest));
}