import React, { Component } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

export class FoodList extends Component {
  render() {
    const { meal } = this.props;
    
    return (
      <div className="meal">
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-info" data-mealid={meal.idMeal}> 
          <h3>{meal.strMeal}</h3>
        </div>
        <button className="recipe_buttons">
          <Link to={{ 
            pathname: `/simple_meal_finder/recipe/${meal.idMeal}`,
            state: { recipe: meal.idMeal }
          }}>View Recipe</Link>
        </button>
      </div>

    );
  }
}

export default FoodList;
