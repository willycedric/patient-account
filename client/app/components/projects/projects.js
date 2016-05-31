import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {projectsDirective} from './projects.directive';

export const projects = angular.module('projects', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('projects', {
      url: '/projects',
      template: '<projects></projects>'
    })
  })
  .directive('projects',projectsDirective);

