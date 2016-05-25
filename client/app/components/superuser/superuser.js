import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {superuserDirective} from './superuser.directive';

export const superuser = angular.module('superuser', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('superuser', {
      url: '/superuser',
      template: '<superuser></superuser>'
    })
  })
  .directive('superuser',superuserDirective);

