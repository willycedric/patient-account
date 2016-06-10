
class DetailsController {
  constructor($stateParams,$http,API) {
		 this.http= $http;
		 this.selectedRole;
	     this.url =`${API.voluntis}/api/project`;
	     this.userPerRole = {};
	  	 //project id passing through url
	     this.projectID = $stateParams.name;
    	 this.getProject(this.projectID);
    	 this.showSelectedRole = false;
    	 /**
		   *
		   */
    	 this.getSelectedUserRole = (role)=>{
    	 
	 			this.showSelectedRole=false;
		        this.selectedUserRole=[];
	    	 	angular.forEach(this.project.accounts,(account,key)=>{
	    	 			if(account.role == role){
	    	 				this.selectedUserRole.push({
	    	 					key:key,
	    	 					account:account
	    	 				});
	    	 			}
	    	 	});
	    	 	this.showSelectedRole=true;
    	 	//debugger;    	 	
    	 };
    	 /**
		   *
		   */
		 this.extractRole = (accounts) =>{
		   		var listOfRole=[];
		   		angular.forEach(accounts, (account,key) => {
		   			listOfRole.push(account.role);
		   		});
		   		return listOfRole.filter(function(elt, index,self){
								return index == self.indexOf(elt);
							});
		   };
		   /**
		   *
		   */
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
		   /**
		   *
		   */
		   this.getUserNumberPerRole = (accounts,roles)=>{
		   		angular.forEach(roles, (role)=>{
		   				var count=0;
			   			angular.forEach(accounts, (account)=>{
			   					if(account.role == role.name){
			   						count++;
			   						this.userPerRole[role.name]=count;
			   					}
			   		});
		   		});
		    };

		   /**
		   *
		   */
		   this.showEditionForm = (user)=>{
		   		this.editedUser = angular.copy(user);		   		
		   };
			
		   /**
		   *
		   */
	      this.submitEditForm = (user,userForm)=>{
	          if(userForm.$valid){
		          this.project.accounts[user.key] = user.account;
		          //this.updateProject(this.project,user.account.role);
	            }
	          };       
         /**
		   *
		   */
         this.updateProject = (project,role) =>{
         	this.http.put(this.url+'/'+project._id,project)
         	.then((response)=>{
         		this.getProject(this.projectID);
         		this.selectedUserRole=[];
         		angular.forEach(response.data.accounts,(account,key)=>{
	    	 			if(account.role == role){
	    	 				this.selectedUserRole.push({
	    	 					key,
	    	 					account
	    	 				});
	    	 			}
	    	 	});
         	},(badResponse)=>{
         		console.error(badResponse);
         	});
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
	    		this.project = response.data;	    				
	    		this.projectRole = this.parseRole(this.extractRole(response.data.accounts));
	    		this.getUserNumberPerRole(response.data.accounts,this.projectRole);	
	    		this.projectName = response.data.name;		
	    	}, (err)=>{
	    		console.error(err);
	    	});
	    }

  }  //End class

DetailsController.$inject=['$stateParams','$http','API'];
export {DetailsController};


