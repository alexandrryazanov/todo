import ToDo from "./components/ToDo";
import React, { useEffect, useState } from "react";
import { MyContext } from "./context";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

const defaultColors = {
  primary: "green",
  secondary: "blue",
};

const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("sore", store.getState());

function App() {
  const [colors, setColors] = useState(defaultColors);

  return (
    <Provider store={store}>
      <MyContext.Provider value={[colors, setColors]}>
        <ToDo />
      </MyContext.Provider>
    </Provider>
  );
}

export default App;
