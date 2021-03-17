import { GET_TODOS, LOADING_USER, CLEAR_LOADING } from "../types";
import { REHYDRATE } from 'redux-persist/lib/constants'

const initialState = {
  loading: null,
  todos: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        loading: null,
        todos: action.payload,
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_LOADING:
      return {
        ...state,
        loading: null,
      };
    // this is where `redux-persist` handles caching
    case REHYDRATE:
      var incoming = action.payload;
      if (incoming) return { ...state, ...incoming };
      return state;
    default:
      return state;
  }
}
