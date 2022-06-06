import React from "react";
import ReactDOM from "react-dom";
import classes from "./Backdrop.module.css";
import { useDispatch, useSelector } from "react-redux";
import uiSliceActions from "../../store/ui-slice";

const Backdrop = () => {
  const dispatch = useDispatch();

  const onBackdropClickHandler = () => {
    dispatch(uiSliceActions.updateModalOpen());
  };
  return (
    <div className={classes["backdrop"]} onClick={onBackdropClickHandler}></div>
  );
};

export default Backdrop;
