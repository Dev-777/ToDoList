import React, { useRef } from "react";
import { connect } from "react-redux";

const ToDoItem = ({ state, dispatch }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const selectColor = (color) => {
    dispatch({ type: "color", titleColor: color });
  };
  console.log(state, "state");

  return (
    <>
      <input
        style={{ backgroundColor: state.createNewItem.color }}
        ref={titleRef}
        type="text"
      />
      <textarea ref={descriptionRef} name="description" cols="30" rows="10" />

      <button
        onClick={() =>
          dispatch({
            type: "add",
            title: titleRef.current.value,
            description: descriptionRef.current.value,
          })
        }
      >
        add
      </button>
      <button onClick={() => dispatch({ type: "open" })}>cancel</button>

      {state.colors.map((item, index) => (
        <button
          key={index + Date()}
          onClick={() => selectColor(item)}
          style={{ backgroundColor: item, width: 50, height: 50 }}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ToDoItem);
