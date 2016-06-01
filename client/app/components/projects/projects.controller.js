
class ProjectsController {
   constructor($http,API) {

   		this.http = $http;
        this.editedproject={};
        this.displayListOfProjects=true;
        this.listOfAvailablesRole ={};
   		//to do
   		this.showNotification = ()=>{
   			this.displayListOfProjects=false;
   		}
       this.url =`${API.voluntis}/api/project`;
        this.getProjects();
       /**
        * [description]
        * @param  {[type]} project     [editied project]
        * @param  {[type]} projectForm [form object]
        * @return {[type]}          [description]
        */
       this.submitEditForm = (project,projectForm)=>{
          this.isEditing=false;
          if(projectForm.$valid){
            this.updateproject(project);
          }       
       };
       this.showEditionForm = (project)=>{
       		this.editedproject = angular.copy(project);
       }
       /**
        * Post a new project account
        * @param  {[type]} project     [description]
        * @param  {[type]} projectForm [description]
        * @return {[type]}          [description]
        */
       this.addProject = (project, projectForm)=>{
          if(projectForm.$valid){
          	console.log(project);
          	debugger;
            this.postProject(project);
          }
       };
       /**
        * delete a project
        * @param  {[type]} data [description]
        * @return {[type]}      [description]
        */
       this.deleteproject = (data)=>{
       		this.http.delete(this.url,{params:{id:data._id}})
       		.then((response)=>{
    			console.log(JSON.stringify(response.data)," was successfully removed");
    			this.getProjects();
    		},(err)=>{
    			console.error(err);
    		});
       };

       /**
        * Update project
        * @param  {[type]} project [description]
        * @return {[type]}      [description]
        */
       this.updateproject = (project)=>{
          this.http.put(this.url+'/'+project._id,project)
          .then((response)=>{
            console.log(JSON.stringify(response.data)," was successfully updated");
            this.getProjects();
          },(err)=>{
            console.error(err);
          });
       };

    };
   /**
    *   get All the projects
    * @return {[type]} [description]
    */
    getProjects(){
    	this.http({
    		method:'GET',
    		url:this.url
    	}).then((reponse)=>{
    		this.projects = reponse.data;
    		
    	}, (err)=>{
    		console.error(err);
    	});
    }

    /**
     * Add a new project
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    postProject(data){
      this.http({
        method:'POST',
        url:this.url,
        data:data
      }).then((response)=>{
        this.getProjects();
      },(err)=>{
        console.error(err);
      });
    }


}
ProjectsController.$inject = ['$http','API'];

export {ProjectsController};


