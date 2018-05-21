var UserAPI = require('UserAPI');

export var startApiCall = () => {
  return {
    type: 'START_API_CALL'
  }
};

export var completeApiCall = () => {
  return {
    type: 'COMPLETE_API_CALL'
  }
};

export var fetchUsers = (dispatch) => {
  dispatch(startApiCall());
  UserAPI.getUsers().then((res) => {
    dispatch(completeApiCall());
    dispatch(addUsers(res));
  });
};

export var deleteUser = (users, id, dispatch) => {
  dispatch(startApiCall());
  UserAPI.deleteUser(users, id, (res)=>{
    dispatch(completeApiCall());
    dispatch(addUsers(res));
  })
};

export var addUsers = (users = []) => {
  return {
    type: 'ADD_USERS',
    users
  }
};

export var editUser = (user = {}) => {
  return {
    type: 'EDIT_USER',
    user
  }
};
