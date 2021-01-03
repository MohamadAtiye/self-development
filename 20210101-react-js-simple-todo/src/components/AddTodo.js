import React, { useState } from "react";
import PropTypes from "prop-types";

function AddTodo(props) {
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(title);
    setTitle("");
  };
  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        autoComplete="off"
        type="text"
        name="title"
        placeholder="Add Todo ..."
        style={{ flex: "10", padding: "5px" }}
        value={title}
        onChange={onChange}
      />
      <input type="submit" value="Submit" className="btn" style={{ flex: 1 }} />
    </form>
  );
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
