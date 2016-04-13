import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {connectionDirective} from './connection.directive';

export const connection = angular.module('connection', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('connection', {
      url: '/connection',
      template: '<connection></connection>'
    })
  })
  .directive('connection',connectionDirective);

