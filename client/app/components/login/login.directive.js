import './login.css';
import {LoginController as controller} from './login.controller';
import template from './login.html';

export const loginDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
