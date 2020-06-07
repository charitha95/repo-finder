import { GET_README_FETCH, GET_README_SUCCESS, GET_README_FAILD } from "../actions/type";

const initialState = {
  fetching: false,
  readme: null,
  error: null
}

const getReadmeReducer = (state, action) => {

  switch (action.type) {

    case GET_README_FETCH:
      return { ...state, ...initialState, fetching: true }

    case GET_README_SUCCESS:
      return { ...state, ...initialState, fetching: false, readme: action.payload }

    case GET_README_FAILD:
      return { ...state, ...initialState, fetching: false, error: action.payload }

    default:
      return state;
  }
}

export default getReadmeReducer