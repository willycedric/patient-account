import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {loginDirective} from './login.directive';

export const login = angular.module('login', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('login', {
      url: '/login',
      template: '<login></login>'
    })
  })
  .directive('login',loginDirective);

