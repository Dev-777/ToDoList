import React, { useState } from "react";
import { connect } from "react-redux";
import ColorButtons from "./ColorButtons";
import styled from "styled-components";
import { showDescription } from "../actions/actions";

const ToDoItem = ({ state, dispatch }) => {
  return (
    <>
      <Item>
        <Title
          backgroundColor={state.createNewItem.color}
          onClick={() => dispatch(showDescription)}
        >
          <span>Title</span>
        </Title>
        <Description>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
            enim esse eum illo incidunt laboriosam, maxime nobis quia? A animi
            architecto culpa dolor eum, ex excepturi explicabo facilis fugiat
            harum in incidunt ipsum minus, mollitia natus nemo nobis officiis
            pariatur perferendis quae quas quos similique sunt velit vitae! Et
            incidunt inventore labore natus non omnis.
          </p>
          <div>
            <button>edit</button>
            <button>cancel</button>
            <ColorButtons />
          </div>
        </Description>
      </Item>
    </>
  );
};

const Item = styled("div")`
  width: 300px;
  height: 300px;
  border: 1px solid green;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  padding: 5px;
`;
const Title = styled.div`
  background-color: ${(props) => props.backgroundColor};
  height: 40px;
  border-radius: 3px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 0 0 3px;
`;
const Description = styled("div")`
  border: 1px solid green;
  height: 200px;
  border-radius: 3px;
`;

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ToDoItem);
