import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {catalogDirective} from './catalog.directive';

export const catalog = angular.module('catalog', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('catalog', {
      url: '/catalog',
      template: '<catalog></catalog>'
    })
  })
  .directive('catalog',catalogDirective);

