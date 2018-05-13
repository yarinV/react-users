var UserAPI = require('UserAPI');

export var startUsersFetch = () => {
  return {
    type: 'START_USERS_FETCH'
  }
};

export var completeUsersFetch = () => {
  return {
    type: 'COMPLETE_USERS_FETCH'
  }
};

export var fetchUsers = (dispatch) => {
  dispatch(startUsersFetch());
  UserAPI.getUsers().then((res) => {
    dispatch(completeUsersFetch());
    dispatch(addUsers(res));
  });
}

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


export var deleteUser = (id) => {
  return {
    type: 'DELETE_USER',
    id
  }
};
