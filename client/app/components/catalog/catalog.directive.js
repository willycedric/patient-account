import './catalog.css';
import {CatalogController as controller} from './catalog.controller';
import template from './catalog.html';

export const catalogDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
