import React, { Component } from "react";
import "./searchBar.css";
import { connect } from "react-redux";
import { searchMeal, fetchMeals } from "../../actions/searchActions";

export class SearchForm extends Component {
  onChange = (e) => {
    this.props.searchMeal(e.target.value);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchMeals(this.props.text);
  };

  render() {
    return (
      <div>
        <div>
          <h1>Meal Finder</h1>
          <div className="flex">
            <form className="flex" id="submit" onSubmit={this.onSubmit}>
              <input
                type="text"
                id="search"
                placeholder="Search for meals or keywords"
                onChange={this.onChange}
              />
              <button className="search-btn" type="submit">
                <i className="fas fa-search">Search</i>
              </button>
            </form>
            <button className="random-btn" id="random">
              <i className="fas fa-random"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.meals.text,
});

export default connect(mapStateToProps, { searchMeal, fetchMeals })(SearchForm);
