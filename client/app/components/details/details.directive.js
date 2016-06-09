import './details.css';
import {DetailsController as controller} from './details.controller';
import template from './details.html';

export const detailsDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
