import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {mobileDirective} from './mobile.directive';

export const mobile = angular.module('mobile', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('mobile', {
      url: '/mobile',
      template: '<mobile></mobile>'
    })
  })
  .directive('mobile',mobileDirective);

