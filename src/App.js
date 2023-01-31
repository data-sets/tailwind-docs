import "../src/dist/style.css";

import React, { Component } from "react";
import Footer from "../src/assets/modules/Footer";
import Header from "../src/assets/modules/Header";
import Main from "../src/assets/modules/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>On going!</h1>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
