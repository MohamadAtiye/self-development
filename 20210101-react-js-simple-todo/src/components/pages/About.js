import React from "react";

function About(props) {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>this is a basic todo list app v1.0.0 written in React-javascript</p>
      <p>uses:</p>
      <ul>
        <li>React, useState, useEffect with functional components</li>
        <li>vanilla javascript</li>
        <li>BrowserRouter and Route from "react-router-dom"</li>
        <li>Axion for https requests</li>
        <li>dummy data from <a target="_blank" rel="noreferrer" href="https://jsonplaceholder.typicode.com/todos">https://jsonplaceholder.typicode.com/todos</a></li>
      </ul>
    </React.Fragment>
  );
}
export default About;
