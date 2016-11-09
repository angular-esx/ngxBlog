import { resourceUtils } from 'xblog-cores/utils';
import { article1474380939Component } from './article-1474380939.component';

export var article1474380939 = {
  id: 1474380939,
  title: 'Dependency Injection',
  postedDate: 'Tue Sep 20 2016 21:15:38 GMT+0700 (SE Asia Standard Time)',
  author: 'Minh Van',
  cover: resourceUtils.getImg('xblog-home-cover.jpg'),
  routeLink: resourceUtils.getArticleRouteLink('dependency-injection-1474380939.html'),
  relatedArticles: [],
  tags: [],
  description: 'An Angular application is a tree of components. Each component instance has its own injector! The tree of components parallels the tree of injectors. We can re-configure the injectors at any level of that component tree with interesting and useful results',
  content: article1474380939Component,
};
