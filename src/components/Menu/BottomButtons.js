import classes from "./BottomButtons.module.css";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import cartSliceActions from "../../store/cart-slice";
import uiSliceActions from "../../store/ui-slice";
import orderSliceActions from "../../store/order-slice";
import { useState, useEffect } from "react";
// import { addOrder } from "../../store/order-slice";
import useOrder from "../../Hooks/use-order";
import useAddToCart from "../../Hooks/use-add-to-cart";
import useRemoveFromCart from "../../Hooks/use-remove-from-cart";

const BottomButtons = (props) => {
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();
  const order = useOrder();

  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const foodObject = props.foodObject;

  const onAddHandler = () => {
    addToCart(foodObject);
  };

  const onRemoveHandler = () => {
    removeFromCart(foodObject);
  };

  const onOrderHandler = () => {
    const orderObject = {
      cart: cart,
      totalAmount: totalAmount,
      totalPrice: totalPrice,
    };

    order(orderObject);
  };

  return (
    <div className={classes["bottom__buttons"]}>
      <Button onClick={onRemoveHandler}>-</Button>
      <Button onClick={onOrderHandler}>ORDER</Button>
      <Button onClick={onAddHandler}>+</Button>
    </div>
  );
};

export default BottomButtons;
