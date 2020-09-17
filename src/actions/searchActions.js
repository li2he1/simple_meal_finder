import { SEARCH_MEAL, FETCH_MEALS } from "./types";
import axios from "axios";

export const searchMeal = (text) => (dispatch) => {
  dispatch({
    type: SEARCH_MEAL,
    payload: text,
  });
};

export const fetchMeals = (text) => (dispatch) => {
  axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
    .then((response) =>
      dispatch({
        type: FETCH_MEALS,
        payload: response.data.meals,
      })
    )
    .catch((err) => {
      console.log(err);
    });
};
