import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {operatorDirective} from './operator.directive';

export const operator = angular.module('operator', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('operator', {
      url: '/operator',
      template: '<operator></operator>'
    })
  })
  .directive('operator',operatorDirective);

