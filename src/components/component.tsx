import React from "react";
import { ReactNode } from "react";

class Car extends React.Component {
  render() {
    return <h2>hi, im a car</h2>;
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
