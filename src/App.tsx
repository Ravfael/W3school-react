// import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "blue" }}>Hello World</h1>
      <p>hello everyone</p>
    </div>
  );
}

export default App;

// Classes
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ", it is a " + this.model;
  }
}
const myCar = new Model("Ford", "Mustang");
myCar.show();

// Arrow Function

hello = function () {
  return "hello worl";
};

hello = () => {
  return "hello world";
};

hello = () => "hello world";

hello = (val) => "hello" + val;

// Map
const myArray = ["apple", "banana", "orange"];
const myList = myArray.map((item) => {
  item;
});
