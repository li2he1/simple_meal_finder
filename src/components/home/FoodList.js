import React, { Component } from "react";
import "./Components.css";

export class FoodList extends Component {
  render() {
    const { meal } = this.props;
    return (
      <div className="meal">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-info" data-mealid={meal.idMeals}>
          <h3>${meal.strMeal}</h3>
        </div>
      </div>
    );
  }
}

export default FoodList;
