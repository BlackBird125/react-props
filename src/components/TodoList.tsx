import React from "react";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <div style={{ margin: "20px 0" }}>
      {todos.map((todo, index) => (
        <TodoItem key={index} title={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;
