import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MealsContainer from "./MealsContainer";

export class Landing extends Component {
  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }
  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }
  render() {
    return (
      <div className="container">
        <SearchBar />
        <MealsContainer />
      </div>
    );
  }
}

export default Landing;
