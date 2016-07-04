
class DetailsController {
  constructor($stateParams,$http,API,$window,Socket) {
		 this.http= $http;
		 this.selectedRole;
	     this.url =`${API.home}/api/project`;
	     this.userPerRole = {};
	     console.log(Socket.displayURL());
	  	 //project id passing through url
	     this.projectID = $stateParams.name;
    	 this.getProject();
    	 this.showSelectedUserRole = true;
    	 /**
		   *
		 */
    	 this.getSelectedUserRole = (role)=>{    	 
		        this.selectedUserRole=[];
	    	 	angular.forEach(this.project.accounts,(account,key)=>{
	    	 			if(account.role == role){
	    	 				this.selectedUserRole.push({
	    	 					key:key,
	    	 					account:account
	    	 				});
	    	 			}
	    	 	});
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
		   * Edit a particular user
		   */
	      this.submitEditForm = (user,userForm)=>{
	          if(userForm.$valid){
	          	  //this.project.accounts[user.key] = user.account;
		          //this.updateProject(this.project,user.account.role);
		          this.updateProject(user);
	            }
	          };       
         /**
		   *
		   */
         this.updateProject = (user) =>{
         	this.http.put(this.url+'/'+this.project._id,user)
         	.then((response)=>{
         		if(response.staus == 202){
         			console.log(response.data);
         		}
         			this.getProject();         			    			
         			//$window.location.reload();
         	},(badResponse)=>{
         		console.error(badResponse);
         	});

         };

         this.addNewAccount = (user, userForm) => {
         	//console.log("userForm error object ", userForm.$error);
         	//console.log("userForm success object", userForm.$$success);
         	//toggle the display of the list of errors messages after the form submission
    	 	this.isFormErrors =false;
         	if(userForm.$valid){
               user.attachedProjectName = this.project.name;
         		this.http({
         			url:this.url,
         			method:'POST',
         			data:user
         		})
         		.then((response)=>{
         			if(response.status == 202){
         				this.isFormErrors = true;
						this.formErrors = response.data;
						console.log(this.formErrors);
         			}else{
	         			this.getProject();
         			}
         		}, (err)=>{
         			console.error(err);
         		});
         	}
         };
         

         /**
          * delete a user account 
          */
         
         this.deleteUserAccount = (account)=>{
         		this.http.delete(this.url,{params:{projectID: this.project._id,accountID:account._id}})
         		.then((response)=>{
         			//this.getProject();
         			$window.location.reload();
         		},(err)=>{
         			console.error(err);
         		})
        };
 
    };//End constructor

     /**
	    *   get the current project
	    * @return {[type]} [description]
	    */
	    getProject(){
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

DetailsController.$inject=['$stateParams','$http','API','$window','Socket'];
export {DetailsController};


