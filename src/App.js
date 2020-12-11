import React from "react";
import ToDoList from "./components/ToDoList";
import { connect } from "react-redux";
import styled from "styled-components";
import "reset-css";
import Img from "../src/assets/images/todobackground.jpg";
import Test from "./components/Test";
import ToDoItem from "./components/ToDoItem";

const App = ({ state, dispatch }) => {
  return (
    <>
      {/*<AppContainer className="App">*/}
      {/*  <AddButton onClick={() => dispatch({ type: "open" })}>*/}
      {/*    Add ToDo*/}
      {/*  </AddButton>*/}
      {/*  <ToDoList />*/}
      {/*</AppContainer>*/}
      <ToDoItem />
      {/*<Test />*/}
    </>
  );
};

const AppContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  background-image: url(${Img});
`;

const AddButton = styled("button")`
  color: tomato;
`;

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(App);
