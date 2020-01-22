// create your App component here

import React, { Component } from "react";

export class App extends Component {
  async componentDidMount() {
    const res = await fetch("http://api.open-notify.org/astros.json");
    const data = res.json();
    return data;
  }

  render() {
    return <div>wubba lubba dub dub</div>;
  }
}

export default App;
