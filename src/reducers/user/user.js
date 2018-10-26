// const initialState = { type: 'GET_USER', user: [{ id: null, firstname: 'test', lastname: 'test', phone: '00000000' }] }
const initialState = { user: [{ id: 17575, firstname: 'fake3', lastname: 'test', phone: '00000000' }, { id: 75752, firstname: 'fake2', lastname: 'test', phone: '00000000' }, { id: 75753, firstname: 'fake1', lastname: 'test', phone: '00000000' }] }
const initialUserState = { userSelected: { id: null, firstname: '', lastname: '', phone: '' } };
const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'ADD_USER':
      if (state.length > 1 && state[0].id === null) {
        let array = state;
        array.splice(0, 1);
        array.push(action.user);
        return array;
      }
      return [...state, action.user];
  
    case 'GET_USER':
      console.log(state, action)
      console.log(state, 'epale ?')
      return Object.assign({}, state, action.userSelected);
    default:
      return state.user;
  }
}

export default userReducer;

