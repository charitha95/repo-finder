import { GET_README_FETCH, GET_README_SUCCESS, GET_README_FAILD } from "./type"
import { getRepoReadme } from "../../api/readme.api";

const getReadme = (fullpath, dispatch) => {

  dispatch({ type: GET_README_FETCH });

  getRepoReadme(fullpath)
    .then(res => res.text())
    .then(data => dispatch({ type: GET_README_SUCCESS, payload: data }))

    .catch(err => dispatch({ type: GET_README_FAILD, payload: err }))
}

export default getReadme;