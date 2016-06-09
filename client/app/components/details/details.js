import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {detailsDirective} from './details.directive';

export const details = angular.module('details', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.
		state('details', {
	      url: '/details/{name}',
	      template: '<details></details>'
		})
  })
  .directive('details',detailsDirective);

