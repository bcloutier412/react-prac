import { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [{ name: "Linda", id: '12wadaw' }, { name: "Frank", id: '15adawd' }, { name: "Joey", id: '17waddaw' }],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <div key={monster.id}><h1>{monster.name}</h1></div>;
        })}
      </div>
    );
  }
}

export default App;
