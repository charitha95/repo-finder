import { GET_REPOS_FETCH, GET_REPOS_SUCCESS, GET_REPOS_FAILD } from "../actions/type";

const initialState = {
  data: null,
  fetching: false,
  error: null
}

const repositoryReducer = (state, action) => {

  switch (action.type) {
    case GET_REPOS_FETCH:
      return { ...state, ...initialState, fetching: true }

    case GET_REPOS_SUCCESS:
      return { ...state, fetching: false, data: action.payload }

    case GET_REPOS_FAILD:
      return { ...state, fetching: false, error: action.payload }

    default:
      return state;
  }
}

export default repositoryReducer