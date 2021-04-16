import ToDo from "./components/ToDo";
import React from "react";
import { MyContext } from "./context";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";

const colors = {
  primary: "green",
  secondary: "blue",
};

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <MyContext.Provider value={colors}>
        <ToDo />
      </MyContext.Provider>
    </Provider>
  );
}

export default App;
