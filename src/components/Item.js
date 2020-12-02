import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ColorButtons from "./ColorButtons";

const Item = ({ state, dispatch, index }) => {
  const showDescription = () => {
    dispatch({ type: "show", itemIndex: index });
  };

  return (
    <>
      <ItemItem>
        <div
          onClick={showDescription}
          style={{
            width: "100%",
            height: 30,
            backgroundColor: `${state.toDoList[index].color}`,
          }}
        >
          {state.toDoList[index].title}
        </div>
        <div
          style={{
            width: "100%",
            border: "1px solid",
            display: `${state.toDoList[index].showDesc}`,
          }}
        >
          <textarea readOnly={true} style={{ width: "98%", resize: "none" }}>
            {state.toDoList[index].description}
          </textarea>
          <ButtonsContainer>
            <button>{state.toDoList[index].readOnly ? "edit" : "save"}</button>
            <button>cancel</button>
            <button>delete</button>
            <ColorButtons indexItem={index} />
          </ButtonsContainer>
        </div>
      </ItemItem>
    </>
  );
};
const ItemItem = styled("div")`
  width: 300px;
  border: 1px solid;
`;

const ButtonsContainer = styled("div")`
  width: 100%;
  height: 30px;
  border: 1px solid;
`;
const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(Item);
