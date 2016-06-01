
class ProjectsController {
   constructor($http,API) {

   		 this.http = $http;
       this.editedUser={};
   		
       this.url =`${API.voluntis}/api/project`;
        this.getProjects();
       /**
        * [description]
        * @param  {[type]} user     [editied user]
        * @param  {[type]} userForm [form object]
        * @return {[type]}          [description]
        */
       this.submitEditForm = (user,userForm)=>{
          this.isEditing=false;
          if(userForm.$valid){
            this.updateUser(user);
          }       
       };
       this.showEditionForm = (user)=>{
       		this.editedUser = angular.copy(user);
       }
       /**
        * Post a new user account
        * @param  {[type]} user     [description]
        * @param  {[type]} userForm [description]
        * @return {[type]}          [description]
        */
       this.addUser = (user, userForm)=>{
          if(userForm.$valid){
            this.postUser(user);
          }
       };
       /**
        * delete a user
        * @param  {[type]} data [description]
        * @return {[type]}      [description]
        */
       this.deleteUser = (data)=>{
       		this.http.delete(this.url,{params:{id:data._id}})
       		.then((response)=>{
    			console.log(JSON.stringify(response.data)," was successfully removed");
    			this.getProjects();
    		},(err)=>{
    			console.error(err);
    		});
       };

       /**
        * Update user
        * @param  {[type]} user [description]
        * @return {[type]}      [description]
        */
       this.updateUser = (user)=>{
          this.http.put(this.url+'/'+user._id,user)
          .then((response)=>{
            console.log(JSON.stringify(response.data)," was successfully updated");
            this.getProjects();
          },(err)=>{
            console.error(err);
          });
       };
    };
   /**
    *   get All the users
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
     * Add a new user
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    postUser(data){
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


