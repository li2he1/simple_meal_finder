import React, { Component } from "react";
import { connect } from "react-redux";
import FoodList from "./FoodList";

export class MealsContainer extends Component {
  render() {
    const { meals } = this.props;
    let content = "";

    if (meals === null) {
      return <p>There are no search results. Try again!</p>;
    } else {
      content =
        meals.length > 0
          ? meals.map((meal, index) => <FoodList key={index} meal={meal} />)
          : null;

      return <div className="row">{content}</div>;
    }
  }
}

const mapStateToProps = (state) => ({
  meals: state.meals.meals,
});

export default connect(mapStateToProps)(MealsContainer);
