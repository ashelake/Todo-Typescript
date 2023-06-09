import React from "react";
import SingleTodo from "./SingleTodo";
interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <>
      <div>TodoList</div>
      <div>
        {todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
