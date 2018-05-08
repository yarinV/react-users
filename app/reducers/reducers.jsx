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
      break;
    case 'EDIT_USER':
        return {
          isFetching: false,
          users:state.users.map((user)=>{
              if(user.id == action.user.id){
                return {
                  ...user,
                  ...action.user
                }
              }
              return user;
            })
          }
        break;
    default:
      return state;
      break;
  }
}
