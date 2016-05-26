
class WebController {
  constructor($http) {
   		 this.greeting  = 'WebController!';
   		 this.http = $http;
   		 this.getUsers();
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
}
WebController.$inject = ['$http'];
export {WebController};

