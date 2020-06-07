import React, { createContext, useReducer } from 'react';
// import { reducer } from './Reducer';
// import repositoryReducer from './reducers/repository.reducer';
import getReadmeReducer from './reducers/readme.reducer';

export const Context = createContext();

const Provider = ({ children }) => {

  const [contextState, dispatch] = useReducer(getReadmeReducer, { repos: [], readme: '' })

  return <Context.Provider value={{ contextState, dispatch }}>
    {children}
  </Context.Provider>
}

export default Provider;