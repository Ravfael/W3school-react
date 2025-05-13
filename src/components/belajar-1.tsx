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
