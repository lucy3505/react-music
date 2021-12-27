// import { ADD_NUM, SUB_NUM, CHANGE_BANNER, CHANGE_RECOMMEND } from "./constant";
// const initialCounterState = { counter: 0 };

// function counterReducer(state = initialCounterState, action) {
//   switch (action.type) {
//     case ADD_NUM: {
//       const { num } = action.payload;
//       return { ...state, counter: state.counter + num };
//     }

//     case SUB_NUM: {
//       const { num } = action.payload;
//       return { ...state, counter: state.counter - num };
//     }
//     default:
//       return state;
//   }
// }
// const initialHomeState = { banner: [], recommend: [] };

// function homeReducer(state = initialHomeState, action) {
//   switch (action.type) {
//     case CHANGE_BANNER: {
//       return { ...state, banner: action.payload };
//     }
//     case CHANGE_RECOMMEND: {
//       return { ...state, recommend: action.payload };
//     }

//     default:
//       return state;
//   }
// }

// const defaultState = { counterInfo: null, homeInfo: null };

import { counterReducer } from "./counter";
import { homeReducer } from "./home";
import { combineReducers } from "redux";

// export default function reducer(state = {}, action) {
//   return {
//     counterInfo: counterReducer(state.counterInfo, action),
//     homeInfo: homeReducer(state.homeInfo, action),
//   };
// }

const reducer = combineReducers({
  counterInfo: counterReducer,
  homeInfo: homeReducer,
});
export default reducer;
