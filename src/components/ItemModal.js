import React from "react";
import { connect } from "react-redux";
import ReactModal from "react-modal";
import ToDoItem from "./ToDoItem";

const ItemModal = ({ state, dispatch }) => {
  return (
    <>
      <ReactModal
        isOpen={state.modal7}
        ariaHideApp={false}
        style={{
          overlay: {},
          content: {
            opacity: 0.8,
            width: 400,
            height: 450,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
          },
        }}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={false}
      >
        <button onClick={() => dispatch({ type: "open" })}>close</button>
        <ToDoItem />
      </ReactModal>
    </>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ItemModal);
