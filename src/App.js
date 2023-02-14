import logo from "./logo.svg";
import "./App.css";
import TodoForm from "./components/todoInput";
import TodoList from "./components/todoList";
function App() {
  return (
    <div className="App">
      <header className="App-header">Todo List</header>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
