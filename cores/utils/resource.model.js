function _resourceUtils(){
  this.getGithubArticleFileLink = function(articleId, filename){
    return 'https://github.com/angular-esx/ngx-examples/blob/master/ngx-blog/articles/' + articleId + '/examples/' + filename;
  };

  this.getImg = function(path){
    return 'blog/resources/images/' + path;
  };

  this.getArticleRouteLink = function(path){
    return 'blog/articles/' + path;
  };
}

export var resourceUtils = new _resourceUtils();