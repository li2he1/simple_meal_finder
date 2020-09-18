import React, { Component } from 'react';

class foodForm extends Component {
    constructor(props){
        super(props);
        this.state={
            meals:[]
        }
    }

    render() {
        if(this.state.meals.length){
            return (
                <div class="single-meal">
                    <h1>{this.state.meal.strMeal}</h1>
                    <img src={this.state.meal.strMealThumb} alt={this.state.meal.strMeal} />
                    <div class="single-meal-info">
                        {this.state.meal.strCategory ? <p>{this.state.meal.strCategory}</p> : ''}
                        {this.state.meal.strArea ? <p>{this.state.meal.strArea}</p>: ''}
                    </div>
                    <div class="main">
                        <p>{this.state.meal.strInstructions}</p>
                        <h2>Ingredients</h2>
                        <ul>
                        {this.state.ingredients.map(ing => <li>{ing}</li>).join('')}
                        </ul>
                    </div>
                </div>  
            );
        }
        else{
            return(
                <div></div>
            )
        }
    }
}

export default foodForm;