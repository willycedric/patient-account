
class DetailsController {
  constructor($stateParams,$http,API) {
		 this.http= $http;
		 this.selectedRole;
	     this.url =`${API.voluntis}/api/project`;
	  	 //project id passing through url
	     this.projectID = $stateParams.name;
    	 this.getProject();
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
			
 
    };//End constructor


	   /**
	    *   get the current project
	    * @return {[type]} [description]
	    */
	    getProject(projectName){
	    	this.http({
	    		url:this.url+'/'+this.projectID,
	    		method:'GET'
	    	})
	    	.then((response)=>{
	    		
	    		this.projectRole = this.parseRole(this.extractRole(response.data.accounts));
	    		this.projectName = response.data.name;	    		
	    	}, (err)=>{
	    		console.error(err);
	    	});
	    }

  }  //End class

DetailsController.$inject=['$stateParams','$http','API'];
export {DetailsController};


