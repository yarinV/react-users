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

        }
         return $.isArray(users) ? users : []; 
    });
  }
};