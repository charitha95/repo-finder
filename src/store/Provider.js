import React, { createContext, useReducer } from 'react';
import rootReducer from './reducers/rootReducer';

export const Context = createContext();

/**
 * Function represents provider component which is going to wrap up the app.
 * @param {Object} props component props
 */
export default function Provider({ children }) {

  const [contextState, dispatch] = useReducer(rootReducer, { repos: [], readme: '' })

  return <Context.Provider value={{ contextState, dispatch }}>
    {children}
  </Context.Provider>
}