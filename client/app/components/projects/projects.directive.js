import './projects.css';
import {ProjectsController as controller} from './projects.controller';
import template from './projects.html';

export const projectsDirective = ()=> {
	 return{
	 	template,
	 	controller,
	 	controllerAs:'vm',
	 	restrict:'E',
	 	replace:true
	 };
};
