import PropTypes from "prop-types";

function ToDoItem(props) {
    
  const getStyle = () => {
    return {
      backgroud: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: props.todo.completed ? "line-through" : "none",
    };
  };

  const {id,title} = props.todo

  return (
    <div style={getStyle()}>
      <p>
        <input type="checkbox" onChange={props.markComplete.bind(this,id)} />
        {title}
        <button onClick={props.delToDo.bind(this,id)} style={btnStyle} >x</button>
      </p>
    </div>
  );
}

// PropTypes
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delToDo: PropTypes.func.isRequired
};

const btnStyle = {
  background:'#ff0000',
  color:'#fff',
  boder:'none',
  padding:'5px 8px',
  borderRadius:'50%',
  cursor:'pointer',
  float:'right'
}

export default ToDoItem;
