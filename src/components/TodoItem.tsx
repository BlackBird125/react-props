import React from "react";

interface TodoItemProps {
  title: string;
  onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, onDelete }) => {
  return (
    <div
      style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
    >
      <span style={{ marginRight: "10px" }}>{title}</span>
      <button
        onClick={onDelete}
        style={{
          padding: "5px 10px",
          backgroundColor: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        削除
      </button>
    </div>
  );
};

export default TodoItem;
