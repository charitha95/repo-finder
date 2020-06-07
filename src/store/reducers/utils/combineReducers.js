/**
 * Function represents custome combine reducer mechanism.
 * @param {Object} reducers all reducers as key val pairs
 */

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action
        );
        return nextState;
      },
      {}
    );
  };
};


export default combineReducers;