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
    });
  }
};
