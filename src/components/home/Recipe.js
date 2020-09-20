import React from 'react';
import { Link } from "react-router-dom";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const mealID = this.props.location.state.recipe;
        const req = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`);
        
        const res = await req.json();
        this.setState({ activeRecipe: res.meals[0] });
        console.log(this.state.activeRecipe);
    }
    render(){
        const recipe = this.state.activeRecipe;
        return (
          <div className="container">
            { this.state.activeRecipe.length !== 0 &&
              <div className="active-recipe">
                <img className="active-recipe__img" src={recipe.strMealThumb} alt={recipe.strMeal}/>
                <h3 className="active-recipe__title">{ recipe.strMeal }</h3>
                <h4 className="active-recipe__instructions">
                    Instructions: <span>{ recipe.strInstructions }</span>
                </h4>
                <p className="active-recipe__website">Website: 
                  <span><a href={recipe.strSource}>{recipe.strSource}</a></span>
                </p>
                <button className="active-recipe__button">
                    <Link to="/simple_meal_finder/">Go Home</Link>
                </button>
              </div>
            }
          </div>
        );
    }
    
};

export default Recipe;