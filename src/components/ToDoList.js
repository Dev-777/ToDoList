import React from "react";
import { connect } from "react-redux";
import ItemModal from "./ItemWrapper";
import styled from "styled-components";

const ToDoList = ({ state, dispatch }) => {
  return (
    <>
      <ToDoListWrapper>
        <ItemModal />
      </ToDoListWrapper>
    </>
  );
};
const ToDoListWrapper = styled("div")`
  width: 60%;
  height: 80vh;
  border: 1px solid tomato;
  margin: 20px 0 0 0;
`;

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ToDoList);
