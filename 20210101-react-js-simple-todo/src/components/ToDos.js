import ToDoItem from "./ToDoItem";
import PropTypes from "prop-types";

function ToDos(props) {


  return (
    <div>
      {props.todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} 
        markComplete={props.markComplete} delToDo={props.delToDo}/>
      ))}
    </div>
  );
}

// PropTypes
ToDos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delToDo: PropTypes.func.isRequired
};

export default ToDos;
