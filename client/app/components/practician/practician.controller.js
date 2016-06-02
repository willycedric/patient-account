
class PracticianController {
 constructor($http) {

   		 this.http = $http;
       this.editedUser={};
   		 this.getUsers();
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
       		this.http.delete('http://192.168.3.208:4000/api/practician',{params:{id:data._id}})
       		.then((response)=>{
    			console.log(JSON.stringify(response.data)," was successfully removed");
    			this.getUsers();
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
          this.http.put('http://192.168.3.208:4000/api/practician/'+user._id,user)
          .then((response)=>{
            console.log(JSON.stringify(response.data)," was successfully updated");
            this.getUsers();
          },(err)=>{
            console.error(err);
          });
       };
    };
   /**
    *   get All the users
    * @return {[type]} [description]
    */
    getUsers(){
    	this.http({
    		method:'GET',
    		url:'http://192.168.3.208:4000/api/practician'
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

    /**
     * Add a new user
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    postUser(data){
      this.http({
        method:'POST',
        url:'http://192.168.3.208:4000/api/practician',
        data:data
      }).then((response)=>{
        this.getUsers();
      },(err)=>{
        console.error(err);
      });
    }
}
PracticianController.$inject = ['$http'];

export {PracticianController};


