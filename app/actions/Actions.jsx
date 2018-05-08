var UserAPI = require('UserAPI');

export var startUsersFetch = () => {
  return {
    type: 'START_USERS_FETCH'
  }
};

export var completeUsersFetch = (users) => {
  return {
    type: 'COMPLETE_USERS_FETCH',
    users
  }
};

export var fetchUsers = (dispatch) => {
  dispatch(startUsersFetch());
  UserAPI.getUsers().then((res) => {
    dispatch(completeUsersFetch(res));
  });
}

export var editUser = (user = {}) => {
  return {
    type: 'EDIT_USER',
    user
  }
};
