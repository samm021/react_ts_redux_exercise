import { Provider } from "react-redux";
import { store } from "./state/store";
import { PackageList } from "./components/PackageList";
import React from "react";

function App() {
  return (
    <Provider store={store}>
      <PackageList />
    </Provider>
  );
}

export default App;
