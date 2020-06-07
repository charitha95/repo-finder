import { GET_README_FETCH, GET_README_SUCCESS, GET_README_FAILD } from "./type"
import { getRepoReadme } from "../../api/readme.api";

const getReadme = (fullpath, dispatch) => {

  dispatch({ type: GET_README_FETCH });

  getRepoReadme(fullpath)
    .then(res => {
      if (res.ok) {
        res.text().then(data => dispatch({ type: GET_README_SUCCESS, payload: data }))
      } else {
        res.text().then(error => dispatch({ type: GET_README_FAILD, payload: error }))
      }
    })
    .catch(error => dispatch({ type: GET_README_FAILD, payload: error }));
}

export default getReadme;