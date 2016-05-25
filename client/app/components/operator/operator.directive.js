import './operator.css';
import {OperatorController as controller} from './operator.controller';
import template from './operator.html';

export const operatorDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
