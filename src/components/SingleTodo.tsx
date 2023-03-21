import React from "react";
import "../App.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form>
      <div className="single-div">
        <span>{todo.todo}</span>
        <span>
          <AiFillEdit />
        </span>
        <span>
          <AiFillDelete />
        </span>
        <span>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
