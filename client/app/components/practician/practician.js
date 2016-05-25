import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {practicianDirective} from './practician.directive';

export const practician = angular.module('practician', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('practician', {
      url: '/practician',
      template: '<practician></practician>'
    })
  })
  .directive('practician',practicianDirective);

