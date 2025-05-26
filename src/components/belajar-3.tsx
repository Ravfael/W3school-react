import { useState } from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
  const [color, setColor] = useState("");

  return (
    <>
      <h1>My favorit color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}>
        blue
      </button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);

function Car() {
  const [brand, setBrand] = useState("ford");
  const [model, setModel] = useState("mustang");
  const [year, setYear] = useState("2015");
  const [color, setColor] = useState("red");

  //   const [car, setCar] = useState({
  //     brand: "ford",
  //     model: "mustang",                   <  bisa pake ini juga >
  //     year: "1964",
  //     color: "red",
  //   });

  const updateColor = () => {
    setCar((previousState) => {
      return { ...previousState, color: "blue" };
    });
  };

  return (
    <>
      <h1>my {brand}</h1>
      <p>
        it is a {color} {model} from {year}
      </p>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car />);
