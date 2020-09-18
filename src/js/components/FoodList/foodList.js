import React, { Component } from 'react';

class foodList extends Component {
    constructor(props){
        super(props);
        this.state={
            meals:[]
        }
    }
    render() {
        if(this.state.meals.length){
            return (
                <div class="meal">
                    <img src={this.state.meals.strMealThumb} alt={this.state.meals.strMeal}  />
                    <div class="meal-info" data-mealID={this.state.meals.idMeals}>
                        <h3>${this.state.meal.strMeal}</h3>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    <p>There are no search results. Try again!</p>
                </div>
            )
        };
    }
}

export default foodList;