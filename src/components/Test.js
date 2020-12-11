import React from "react";
import styled from "styled-components";

const Test = () => {
  return (
    <>
      <Div>
        <p style={{ backgroundColor: "green", marginLeft: 10 }}>span</p>
      </Div>
    </>
  );
};

const Div = styled("div")`
  width: 500px;
  height: 400px;
  border: 1px solid black;
  margin: 20px 30px;
`;

export default Test;
