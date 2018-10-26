import HomeModule from '../modules/home/home.module';
import UserModule from '../modules/user/user.module';

let nextTodoId = 0
let nextUserId = 0

export const redirectHome = () => {
  return {
    type: 'REDIRECT_HOME',
    component: HomeModule,
    path: '/home' || '/',
    children: [],
  }
}

export const redirectUser = () => {
  return {
    type: 'REDIRECT_USER',
    component: UserModule,
    path: '/user',
    children: [],
  }
}

export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const setUserDaata = function(user) {
  return {
    type: 'ADD_USER',
    user: {
      id: nextUserId++,
      firstname: user.firstname,
      lastname: user.lastname,
      phone: user.phone,
    }
  }
}

export const getUserDaata = function(userSelected) {
  return {
    type: 'GET_USER',
    userSelected
  }
}
