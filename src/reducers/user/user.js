import { ADD_USER, GET_USER, UPDATE_USER, UPDATE_USER_VISIBLE } from "../../actions";

// const initialState = { type: 'GET_USER', user: [{ id: null, firstname: 'test', lastname: 'test', phone: '00000000' }] }
const initialState = { user: [
  { id: 17575, firstname: 'fake1', lastname: 'test1', isVisible: false, phone: '00000000' },
  { id: 75752, firstname: 'fake2',lastname: 'test2', isVisible: false, phone: '00000000' },
  { id: 75753, firstname: 'fake3', lastname: 'test3', isVisible: false, phone: '00000000' }
] }

const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case ADD_USER:
      if (state.length > 1 && state[0].id === null) {
        let array = state;
        array.splice(0, 1);
        array.push(action.user);
        return array;
      }
      return [...state, action.user];
  
    case GET_USER:
      console.log(state, action)
      return Object.assign({}, state, action.userSelected);

    case UPDATE_USER:
      return state;

    case UPDATE_USER_VISIBLE:
      state.filter(user => { if (user.id === action.id) { Object.assign({}, user, user.isVisible = !user.isVisible); return user; } })
      return state;
    
    default:
      return state.user;
  }
}

export default userReducer;

