import React from 'react';
import './App.css';


import FoodList from './js/components/FoodList/foodList';
import SearchBar from './js/components/SearchBar/searchBar';
import FoodForm from './js/components/FoodForm/foodForm';

function App() {
  return (
    <div className="container">
      <SearchBar />
      <FoodList />
      <FoodForm />
    </div>
  );
}

export default App;
