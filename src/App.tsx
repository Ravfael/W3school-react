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

//
const element = <h1 className="myclass">react is {5 + 5} faster with jsx</h1>;
const myElements = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Manggo</li>
  </ul>
);
const tes = (
  <div>
    <p>this is a paragraph 1</p>
    <p>this is a paragraph 2</p>
  </div>
);
const test = (
  <>
    <p>self taging</p>
    <p>self taging</p>
  </>
);
const myElement = <input type="text" />;

const x = 5;
let text = "goodbye";
if (x < 10) {
  text = "hello";
}
const loop = <h1>{text}</h1>;

const y = 5;
const myTernary = <h1>{x < 10 ? "hello" : "goodbye"}</h1>;
