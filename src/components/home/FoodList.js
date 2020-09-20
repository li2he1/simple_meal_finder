import React, { Component } from "react";
import "./Components.css";
import { Link } from "react-router-dom";

export class FoodList extends Component {
  render() {
    const { meal } = this.props;
    
    return (
      <div className="meal"><Link to={{ 
        pathname: `/simple_meal_finder/recipe/${meal.idMeal}`,
        state: { recipe: meal.idMeal }
      }}>
        <img src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="meal-info" data-mealid={meal.idMeal}> 
          <h3>{meal.strMeal}</h3>
        </div>
        </Link>
        
      </div>

    );
  }
}

export default FoodList;
