
class WebController {
  constructor($http) {
   		 this.http = $http;
   		 this.getUsers();
       this.submited=false;
       this.submitEditForm = (user,isValid)=>{
          
          if(isValid.$valid){

            this.updateUser(user);
            this.submited = false;
          }
         
          
       };
       //delete a user
       this.deleteUser = (data)=>{
       		this.http.delete('http://localhost:3000/api/users',{params:{id:data._id}})
       		.then((response)=>{
    			console.log(JSON.stringify(response.data)," was successfully removed");
    			this.getUsers();
    		},(err)=>{
    			console.error(err);
    		});
       };

       //Update user
       this.updateUser = (user)=>{
          this.http.put('http://localhost:3000/api/users/'+user._id,user)
          .then((response)=>{
            console.log(JSON.stringify(response.data)," was successfully updated");
            this.getUsers();
          },(err)=>{
            console.error(err);
          });
       };
   }
   	//get All the users
    getUsers(){
    	this.http({
    		method:'GET',
    		url:'http://localhost:3000/api/users'
    	}).then((reponse)=>{
    		this.users = reponse.data;
    		// Compute the number of row(s) used to display the user
    		if(this.users.length <= 4){
    			this.nbRows = 1;
    		}
	   		else if(Math.ceil(this.users.length/4) < 4){
	   			this.nbRows = Math.floor(this.users.length/4)+1;
	   		}else{
	   			this.nbRows = Math.floor(this.users.length/4);
	   		}
    	}, (err)=>{
    		console.error(err);
    	});
    }

    //Add a new user
    postUser(data){
      this.http({
        method:'POST',
        url:'http://localhost:3000/api/users',
        data:data
      }).then((response)=>{
        this.newUser = response.data;
      },(err)=>{
        console.error(err);
      });
    }
}
WebController.$inject = ['$http'];
export {WebController};

