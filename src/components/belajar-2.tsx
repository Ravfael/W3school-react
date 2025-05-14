import { useState } from "react";
import ReactDOM from "react-dom/client";
import "./belajar.css";

function MyForm() {
  const [name, setName] = useState("");

  const handleSumbit = (event) => {
    event.preventDefault();
    alert(`the name you entered was: ${name}`);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <input type="submit" />
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);

// text area
function MyForms() {
  const [textarea, setTextarea] = useState("the content of a textarea goes in the value attribute");

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForms />);

// select
function MyForm() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value);
  };

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  );
}

// styling with css
const Header = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>Hello Style</h1>
      <h1 style={{ backgroundColor: "blue" }}>Hello Style</h1>
      <p>add a little style</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);

const Page = () => {
  const myStyle = {
    color: "blue",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif",
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style</h1>
      <p>add a little style</p>
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Page />);
