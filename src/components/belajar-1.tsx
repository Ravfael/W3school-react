import React from "react";
import ReactDOM from "react-dom";

// props
function Car(props) {
  return <h2>im a {props.brand}</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>who lives in my garage?</h1>
      <Car brand={carName} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();

// events
function Football() {
  const shoot = () => {
    alert("greet shoot");
  };
  return <button onClick={shoot}>take a shoot</button>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Football />);

//conditional
function MissedGoal() {
  return <h1>MISSED</h1>;
}
function MadeGoal() {
  return <h1>GOALL</h1>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);

function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>you have {cars.length} cars in your garage</h2>}
    </>
  );
}
const cars = ["ford", "bmw", "audi"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage cars={cars} />);

// lists
function Car(props) {
  return <li>im a {props.brand}</li>;
}

function Garage() {
  const cars = ["ford", "bmw", "audi"];
  return (
    <>
      <h1>who lives in my garage</h1>
      {cars.map((car) => (
        <Car brand={car} />
      ))}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);

// form
function MyForm() {
  return (
    <form>
      <label>
        Enter your name:
        <input type="text" />
      </label>
    </form>
  );
}
