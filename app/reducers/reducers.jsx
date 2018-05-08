export var usersReducer = (state={isFetching: false, users: undefined}, action) =>{
  switch (action.type) {
    case 'START_USERS_FETCH':
      return {
        isFetching: true,
        users: undefined
      };
      break;
    case 'COMPLETE_USERS_FETCH':
      return {
        isFetching: false,
        users: action.users
      };
    default:
      return state;
      break;
  }
}
