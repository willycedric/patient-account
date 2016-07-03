class ProjectsController {
   constructor($http,API,$window) {

        this.http = $http;
        this.window = $window;
        this.editedproject={};
        this.displayListOfProjects=true;
        this.displaySelectedProject=false;
        this.listOfAvailablesRole ={};
        this.listOfProjectsDetails = [];
        this.selectedRole = null;
    
      //Todo
      this.showProjectList = (name) =>{
          this.displayListOfProjects=true;
           angular.forEach(this.listOfProjectsDetails, (project, key)=>{
          if (name == project.name && project.isDisplayed){
              project.isDisplayed = false;
             // this.displayListOfProjects = true;
           }
      });
     };

       this.url =`${API.home}/api/project`;
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
<<<<<<< HEAD
          	//console.log(project);
          	//debugger;
=======
            //console.log(project);
            //debugger;
>>>>>>> 0ed7e23bcfa3b4f45255c7e1854cdc890a15faa1
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

       this.extractRole = (accounts) =>{
          var listOfRole=[];
          angular.forEach(accounts, (account,key) => {
            listOfRole.push(account.role);
          });
          return listOfRole.filter(function(elt, index,self){
                return index == self.indexOf(elt);
              });
       };

       this.parseRole  = (roles) =>{
          var arr=[];
          angular.forEach(roles, (name, key)=>{
            arr.push({
              id:key,
              name:name
            });
          });
          return arr;
       };
    
       this.getProjectsDetails = (listOfProjects) => {
          
          angular.forEach(listOfProjects, (project, key) => {
            this.listOfProjectsDetails.push({
              id:project._id,
              name: project.name,
              isDisplayed:false,
              //remove duplicate role and return an array with unique role 
              role:this.parseRole(this.extractRole(project.accounts))
            });             
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
      }).then((response)=>{
        this.projects = response.data;
          this.getProjectsDetails(response.data);
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
        console.log(response.data);
        this.getProjects();
        //this.window.location.reload();
      },(err)=>{
        console.error(err);
      });
    }
}
ProjectsController.$inject = ['$http','API','$window'];

export {ProjectsController};


/*<select ng-model="orderProp" ng-options="place.category for place in places | unique:'category'">
    <option value="0">Default</option>
    // unique options from the categories
</select>*/