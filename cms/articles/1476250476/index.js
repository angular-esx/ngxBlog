import { resourceUtils } from 'xblog-cores/utils';
import { article1476250476Component } from './article-1476250476.component';

export var article1476250476 = {
  id: 1476250476,
  title: 'Change Detection',
  postedDate: 'Wed Oct 12 2016 12:34:35 GMT+0700 (SE Asia Standard Time)',
  author: 'Minh Van',
  cover: resourceUtils.getImg('xblog-home-cover.jpg'),
  routeLink: resourceUtils.getArticleRouteLink('change-detection-1476250476.html'),
  relatedArticles: [],
  tags: [],
  description: 'In Angular world, Zone plays very nicely with what Angular needs in order to perform change detection in our applications. Each component has its own change detector and an Angular application consists of a component tree, the logical result is that we’re having a change detector tree too.',
  content: article1476250476Component,
};
