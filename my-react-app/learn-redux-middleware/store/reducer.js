import { ADD_NUMBER } from "./constants.js";
const initialState = { counter: 0 };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: action.num + state.counter };
    default:
      return state;
  }
}
