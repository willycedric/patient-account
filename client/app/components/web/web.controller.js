
class WebController {
  constructor($http) {
   		 this.greeting  = 'WebController!';
   		 this.http = $http;
   		 this.getUsers();
       this.submited=false;
       this.submitForm = (user,isValid)=>{
          
          if(isValid.$valid){
            console.log(user);
            this.postUser(user);
            this.submited = false;
          }
          user={};
          isValid.$setPristine();
          
       };   
   }

    getUsers(){
    	this.http({
    		method:'GET',
    		url:'http://localhost:3000/api/users'
    	}).then((reponse)=>{
    		this.users = reponse.data;
    	}, (err)=>{
    		console.error(err);
    	});
    }

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

