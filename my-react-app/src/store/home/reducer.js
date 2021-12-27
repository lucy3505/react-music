import { CHANGE_BANNER, CHANGE_RECOMMEND } from "./constants";

const initialHomeState = { banner: [], recommend: [] };

export default function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNER: {
      return { ...state, banner: action.payload };
    }
    case CHANGE_RECOMMEND: {
      return { ...state, recommend: action.payload };
    }

    default:
      return state;
  }
}
