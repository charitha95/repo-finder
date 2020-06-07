import React, { createContext, useReducer } from 'react';
import rootReducer from './reducers/rootReducer';

export const Context = createContext();

export default function Provider({ children }) {

  const [contextState, dispatch] = useReducer(rootReducer, { repos: [], readme: '' })

  return <Context.Provider value={{ contextState, dispatch }}>
    {children}
  </Context.Provider>
}