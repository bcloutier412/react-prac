import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Brandon", lastName: "Cloutier" },
      food: "pizza",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello im {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <p>I like {this.state.food}</p>
          <p>I live at {this.state.location}</p>
          <button
            onClick={() => {
              this.setState({ name: { firstName: "John", lastName: "Dude" } });
            }}
          >
            Change Name
          </button>
          <button
            onClick={() => {
              this.setState({ food: "rice", location: "Irvine" });
            }}
          >
            Food and location
          </button>
        </header>
      </div>
    );
  }
}

export default App;
