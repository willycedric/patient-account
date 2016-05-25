import './web.css';
import {WebController as controller} from './web.controller';
import template from './web.html';

export const webDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
