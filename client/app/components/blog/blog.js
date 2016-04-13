import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {blogDirective} from './blog.directive';

export const blog = angular.module('blog', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    })
  })
  .directive('blog',blogDirective);

