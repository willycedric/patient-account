import './shop.css';
import {ShopController as controller} from './shop.controller';
import template from './shop.html';

export const shopDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
