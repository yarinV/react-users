var $ = require('jquery');
var axios = require('axios');

module.exports = {
  getUsers: function(){
    return axios.get('ReactTask.json')
    .then((res)=>{
         var users = [];
         try{
          users = res.data;
        }catch(e){
          console.log('Error on server, couldn\'t get users');
        }
         return $.isArray(users) ? users : [];
    }).catch((err)=>{
      console.log(err);
    })
  },
  deleteUser: function(users ,id, cb){
    // in real condition this will call deleteUser:id and return the updated users list
    var updatedUsers = users.filter((user)=> user.id != id);
    if(typeof cb == "function"){
      cb(updatedUsers);
    }
    
  }
};
