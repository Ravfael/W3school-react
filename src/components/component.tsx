import React from "react";
import { ReactNode } from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return <h2>hi, im a {this.state.color}car</h2>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);

function mobil(props) {
  return <h2>hi,{props.color} im a car</h2>;
}

function garage() {
  return (
    <>
      <h1>my collection</h1>
      <mobil />
    </>
  );
}

//props
class Cars extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Cars color="red" />);

class Mobil extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>im a {this.props.model}</h2>;
  }
}
const root = ReactDOM.createRoot(document.getElementbyId("root"));
root.render(<Mobil model="mustang" />);

//changing the state object
class Mobils extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      model: "I7",
      color: "red",
      year: 2024,
    };
  }

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ favoritecolor: "yellow" });
  //   }, 1000);
  // }

  changeColor = () => {
    this.setState({ color: "blue" });
  };

  render() {
    return (
      <div>
        <h1>my {this.state.brand}</h1>
        <p>
          it is a {this.state.color}
          {this.state.model}
          from {this.state.year}
        </p>
        <button type="button" onClick={this.changeColor}>
          change color
        </button>
      </div>
    );
  }
}

// Class
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "before the update, the favorite was " + prevState.favoritecolor;
  }

  componentDidUpdate() {
    document.getelementById("div2").innerHTML = "the update favorite is " + this.state.favoritecolor;
  }

  render() {
    return (
      <div>
        <h1>my favorite color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
