import React from "react";
import classes from "./Backdrop.module.css";
import { useDispatch } from "react-redux";
import uiSliceActions from "../../store/ui-slice";
import useCloseCart from "../../Hooks/use-close-cart";

const Backdrop = () => {
  const closeCart = useCloseCart();

  return <div className={classes["backdrop"]} onClick={closeCart} />;
};

export default Backdrop;
