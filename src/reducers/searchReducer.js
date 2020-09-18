import { SEARCH_MEAL, FETCH_MEALS } from "../actions/types";

const initialState = {
  text: "",
  meals: [],
  meal: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_MEAL:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_MEALS:
      return {
        ...state,
        meals: action.payload,
      };
    
    default:
      return state;
  }
}
