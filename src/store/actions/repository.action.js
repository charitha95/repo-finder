import { GET_REPOS_SUCCESS, GET_REPOS_FAILD, GET_REPOS_FETCH } from "./type";
import { getUserRepositories } from "../../api/repositoy.api";

const getRepositories = (username, dispatch) => {

  dispatch({ type: GET_REPOS_FETCH });

  getUserRepositories(username)
    .then(res => {
      if (res.ok) {
        res.json().then(data => dispatch({ type: GET_REPOS_SUCCESS, payload: data }))
      } else {
        res.json().then(error => dispatch({ type: GET_REPOS_FAILD, payload: error }))
      }
    })
    .catch(error => dispatch({ type: GET_REPOS_FAILD, payload: error }));
}

export default getRepositories