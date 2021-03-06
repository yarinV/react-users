export var fetchReducer = (state = { isFetching: false}, action) => {
  switch (action.type) {
    case 'START_API_CALL':
      return {isFetching: true};
      break;
    case 'COMPLETE_API_CALL':
      return {isFetching: false};
      break;
    default:
      return state;
      break;
  }
}

export var usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return action.users;
    break;
    case 'EDIT_USER':
      return state.map((user) => {
        if (user.id == action.user.id) {
          return {
            ...user,
            ...action.user
          }
        }
        return user;
      })
    break;
    default:
      return state;
      break;
  }
}
