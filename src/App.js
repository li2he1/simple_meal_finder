import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Landing from "./components/home/Landing";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Landing />
    </Provider>
  );
}

export default App;
