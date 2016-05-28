
import 'normalize.css';
import {appDirective} from './app.directive';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {mobile} from './components/mobile/mobile';
import {web} from './components/web/web';
import {practician} from './components/practician/practician';
import {superuser} from './components/superuser/superuser';
import {operator} from './components/operator/operator';

angular.module('app', [
  uiRouter,
  ngAnimate,
  mobile.name,
  web.name,
  practician.name,
  superuser.name,
  operator.name
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
