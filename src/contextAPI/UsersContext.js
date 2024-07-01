import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
const UsersContext = createContext({});

export const UsersProvider = (props) => {
  function reducer(state, action) {
    switch(action.type) {
      case "deleteUser":
        return {
          ...state,
          users: state.users.filter(user => user.id !== action.payload.id)
        };
      case "createUser": {
        const user = action.payload;
        user.id = Math.random();
        return {
          ...state,
          users: [...state.users, user]
        };
      }
      case "updateUser": { 
        const updated = action.payload; 
        return {
          ...state,
          users: state.users.map(u => u.id === updated.id ? updated : u)
        };
      }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UsersContext.Provider value={{ state, dispatch }}>
      {props.children}
    </UsersContext.Provider>
  );
};

export default UsersContext;
