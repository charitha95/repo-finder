import combineReducers from './utils/combineReducers'
import repositoryReducer from './repository.reducer';
import readmeReducer from './readme.reducer';

const rootReducer = combineReducers({
  repos: repositoryReducer,
  readme: readmeReducer
});

export default rootReducer;