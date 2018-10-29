let nextUserId = 0;

export const setUserDaata = function(user) {
  return {
    type: 'ADD_USER',
    user: {
      id: nextUserId++,
      firstname: user.firstname,
      lastname: user.lastname,
      isVisible: user.isVisible,
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

export const updateUser = function(user) {
  return {
    type: 'UPDATE_USER',
    user
  }
}

export const updateUserVisible = function(id) {
  return {
    type: 'UPDATE_USER_VISIBLE',
    id
  }
}

export const ADD_USER = 'ADD_USER';
export const GET_USER = 'GET_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_VISIBLE = 'UPDATE_USER_VISIBLE';
