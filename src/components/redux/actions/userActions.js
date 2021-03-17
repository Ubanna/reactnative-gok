import {
  GET_TODOS,
  LOADING_USER,
  CLEAR_LOADING,
} from "../types";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";


export const getTodos = () => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({ type: CLEAR_LOADING });
      console.log(err)
    }
    );
};

