import { useState, useEffect, useRef, useReducer } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
    </>
  );
}
const root = ReeactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//useReducer
const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input type="checkbox" checked={todo.complete} onChange={() => handleComplete(todo)} />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todos />);
