
import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {projects} from './components/projects/projects';
import {details} from './components/details/details';
import {shared} from './shared/shared';


angular.module('app', [
  uiRouter,
  ngAnimate,
  projects.name,
  details.name,
  shared.name
])
.directive('app', appDirective)
.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.name.toLowerCase().indexOf(searchString) !== -1){
			result.push(item);
		}
		});
		return result;
	};
});
