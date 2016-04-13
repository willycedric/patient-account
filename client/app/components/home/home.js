import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {homeDirective} from './home.directive';

export const home = angular.module('home', [uiRouter])
  .config(($stateProvider,$urlRouterProvider) => {
  	$urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
      url: '/home',
      template: '<home></home>'
    })
  })
  .directive('home',homeDirective);

