import { resourceUtils } from 'xblog-cores/utils';
import { article1474905680Component } from './article-1474905680.component';

export var article1474905680 = {
  id: 1474905680,
  title: 'Template Syntax',
  postedDate: 'Mon Sep 26 2016 23:01:19 GMT+0700 (SE Asia Standard Time)',
  author: 'Minh Van',
  cover: resourceUtils.getImg('xblog-home-cover.jpg'),
  routeLink: resourceUtils.getArticleRouteLink('template-syntax-1474905680.html'),
  relatedArticles: [],
  tags: [],
  description: 'In Angular, the component plays the part of the controller/viewmodel, and the template represents the view. Our Angular application manages what the user sees and can do, achieving this through the interaction of a Component class instance and its user-facing template. Let’s find out what it takes to write a template for our view',
  content: article1474905680Component,
};
