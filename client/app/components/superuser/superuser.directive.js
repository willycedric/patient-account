import './superuser.css';
import {SuperuserController as controller} from './superuser.controller';
import template from './superuser.html';

export const superuserDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
