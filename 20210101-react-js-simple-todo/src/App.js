import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import Axios from "axios";

import "./App.css";

import Header from "./components/layout/Header";
import ToDos from "./components/ToDos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    Axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then(
      (response) => {
        setTodos(response.data);
      }
    );
  }, []);

  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const delToDo = (id) => {
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>{
      setTodos(todos.filter((todo) => todo.id !== id));
    })
  };

  const addTodo = (title) => {
    Axios.post("https://jsonplaceholder.typicode.com/todos",{title,completed:false})
    .then(
      (response) => {
        setTodos([...todos, response.data]);
      }
    );
  };

  const generateToDos = () => {
    return (
      <React.Fragment>
        <AddTodo addTodo={addTodo} />
        <ToDos todos={todos} markComplete={markComplete} delToDo={delToDo} />
      </React.Fragment>
    );
  };

  return (
    <Router basename={'/react-js-todo'}>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={() => generateToDos()}></Route>
          <Route path="/about" component={About}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
