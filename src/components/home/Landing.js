import React, { Component } from "react";
import SearchBar from "./SearchBar";
import MealsContainer from "./MealsContainer";

export class Landing extends Component {
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
