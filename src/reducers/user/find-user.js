const initialUserState = { userSelected: { id: null, firstname: '', lastname: '', phone: '' } };

const findUserReducer = function(state = initialUserState, action) {
  switch (action.type) {

    case 'GET_USER':
      console.log(state, action)
      console.log(state, 'epale ?')
      return Object.assign({}, state, action.userSelected);
  
    default:
      return state.userSelected;
  }
}

export default findUserReducer;