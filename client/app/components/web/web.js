import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {webDirective} from './web.directive';

export const web = angular.module('web', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('web', {
      url: '/web',
      template: '<web></web>'
    })
  })
  .directive('web',webDirective);

