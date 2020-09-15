import React from 'react';
import './searchBar.css';

function searchBar(props) {
    return (
        <div>
            <h1>Meal Finder</h1>
            <div className="flex">
                <form className="flex" id="submit">
                <input
                    type="text"
                    id="search"
                    placeholder="Search for meals or keywords"
                />
                <button className="search-btn" type="submit">
                    <i className="fas fa-search"></i>
                </button>
                </form>
                <button className="random-btn" id="random">
                <i className="fas fa-random"></i>
                </button>
            </div>
        </div>
    );
}

export default searchBar;