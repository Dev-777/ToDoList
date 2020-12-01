import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ColorButtons from "./ColorButtons";
const Item = ({ state, dispatch, index }) => {
  return (
    <>
      <ItemItem>
        <Title>Title field</Title>
        <Description>
          <span>description</span>
        </Description>

        <ButtonsContainer>
          <button>edit/save</button>
          <button>cancel</button>
          <ColorButtons index={index} />
        </ButtonsContainer>
      </ItemItem>
    </>
  );
};

const ItemItem = styled("div")`
  width: 300px;
  border: 1px solid;
`;
const Title = styled("div")`
  width: 100%;
  height: 30px;
  background-color: green;
`;
const Description = styled("div")`
  width: 100%;
  height: 200px;
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
