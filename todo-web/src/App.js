// import logo from './logo.svg';
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="Header">
        <Header/>
      </div>
      <div className="TodoApp">
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
