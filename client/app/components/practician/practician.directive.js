import './practician.css';
import {PracticianController as controller} from './practician.controller';
import template from './practician.html';

export const practicianDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
