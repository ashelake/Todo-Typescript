import React, { useState } from "react";

import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos)

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("")
    }
  };

  return (
    <div className="App">
      <span className="title">MY_TODO</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
