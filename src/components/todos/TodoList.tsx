import React, { useState } from 'react';

interface Todo {
  text: string;
  isCompleted: boolean;
}

interface TodoProps {
  todo: Todo;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div className={`todo${todo.isCompleted ? ' completed' : ''}`} style={{ color: 'white' }}>
      <span>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { text: 'Example Task 1', isCompleted: false },
    { text: 'Example Task 2', isCompleted: false },
    { text: 'Example Task 3', isCompleted: false },
  ]);

  const addTodo = (text: string) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const todoText = form.elements.todoText.value;
    addTodo(todoText);
    form.reset();
  };

  return (
    <div className="box-budget" style={{ backgroundColor: '#000', color: '#fff' }}>
      <h1>TodoList</h1>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <input type="text" name="todoText" placeholder="Add new task" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoList;
