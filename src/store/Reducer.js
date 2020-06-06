import { GET_REPOS, GET_README } from "./Types";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_REPOS:
      return { ...state, repos: [...action.payload] }
    case GET_README:
      return { ...state, readme: action.payload }
    default:
      return state;
  }
}