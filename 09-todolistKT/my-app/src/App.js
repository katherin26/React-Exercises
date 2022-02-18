import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  function onAddHandler() {
    if (todoItem === "") return;
    setTodoList([...todoList, { description: todoItem, status: "Pending" }]);
    setTodoItem("");
  }

  function onDoneHandler(index) {
    let item = { ...todoList[index] };
    item.status = "Done";

    setTodoList([
      ...todoList.slice(0, index),
      item,
      ...todoList.slice(index + 1),
    ]);
  }

  function onRemoveHandler(index) {
    setTodoList([...todoList.slice(0, index), ...todoList.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Welcome name="Name" lastName="lastName" />
      <Input
        name="todoItem"
        label="What's Next!"
        value={todoItem}
        onChangeHandler={(e) => setTodoItem(e.target.value)}
      />
      <Button name="Add" color="info" onClickHandler={onAddHandler} />
      <TodoList
        items={todoList}
        onDoneHandler={onDoneHandler}
        onRemoveHandler={onRemoveHandler}
      />
    </div>
  );
}

export default App;
