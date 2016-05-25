import './mobile.css';
import {MobileController as controller} from './mobile.controller';
import template from './mobile.html';

export const mobileDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
