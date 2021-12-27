import { ADD_NUM, SUB_NUM } from "./constants";
const initialCounterState = { counter: 0 };

export default function counterReducer(state = initialCounterState, action) {
  switch (action.type) {
    case ADD_NUM: {
      const { num } = action.payload;
      return { ...state, counter: state.counter + num };
    }

    case SUB_NUM: {
      const { num } = action.payload;
      return { ...state, counter: state.counter - num };
    }
    default:
      return state;
  }
}
