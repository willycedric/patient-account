import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {shopDirective} from './shop.directive';

export const shop = angular.module('shop', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('shop', {
      url: '/shop',
      template: '<shop></shop>'
    })
  })
  .directive('shop',shopDirective);

