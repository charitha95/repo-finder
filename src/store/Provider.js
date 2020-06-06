import React, { createContext, useReducer } from 'react';
import { reducer } from './Reducer';

export const Context = createContext();

const Provider = ({ children }) => {

  const [contextState, dispatch] = useReducer(reducer, { repos: [], readme: '' })

  return <Context.Provider value={{ contextState, dispatch }}>
    {children}
  </Context.Provider>
}

export default Provider;