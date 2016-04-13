import './connection.css';
import {ConnectionController as controller} from './connection.controller';
import template from './connection.html';

export const connectionDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
