import React, { useState } from "react";
import logo from "./logo.svg";
import { Navigation } from "./Navigation/Navigation";
import { WorkList } from "./WorkList/WorkList";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducer from "./reducers";
import "./App.css";

// const store = createStore(reducer);
// const store = {};

function App() {
  const [needsRefresh, setNeedsRefresh] = useState(false);

  return (
    // <Provider store={store}>
    <div className="App">
      <Navigation refresh={setNeedsRefresh} />
      <div className="header">
        <h1>Work Tractor</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="page-container">
        <WorkList needsRefresh={needsRefresh} setRefresh={setNeedsRefresh} />
      </div>
    </div>
    // </Provider>
  );
}

export default App;
