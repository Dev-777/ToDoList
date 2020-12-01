import React from "react";
import { connect } from "react-redux";

const ColorButton = ({ state, dispatch, indexItem }) => {
  const selectColor = (color) => {
    dispatch({ type: "color", titleColor: color });
  };
  return (
    <>
      {state.colors.map((item, index) => (
        <button
          key={index + Date()}
          onClick={() => selectColor(item)}
          style={{ backgroundColor: item, width: 20, height: 20 }}
        />
      ))}
    </>
  );
};

const mapStateToProps = (state) => {
  return { state: state };
};

export default connect(mapStateToProps)(ColorButton);
