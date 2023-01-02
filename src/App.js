import React, { Fragment } from "react";
import About from "./components/layout/About";
import Features from "./components/layout/Features";

import Header from "./components/layout/Header";


function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <About />
        <Features />
      </main>
    </Fragment>
  );
}

export default App;
