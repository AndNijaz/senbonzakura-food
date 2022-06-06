import classes from "./BottomButtons.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import cartSliceActions from "../../store/cart-slice";
import uiSliceActions from "../../store/ui-slice";

const BottomButtons = (props) => {
  const dispatch = useDispatch();

  const foodObject = props.foodObject;

  const onAddHandler = () => {
    dispatch(cartSliceActions.addToCart(foodObject));
    dispatch(uiSliceActions.updateCartIconScale());
    setTimeout(() => {
      dispatch(uiSliceActions.updateCartIconScale());
    }, 500);
  };

  const onRemoveHandler = () => {
    dispatch(cartSliceActions.removeFromCart(foodObject));
  };

  const onOrderHandler = () => {};

  return (
    <div className={classes["bottom__buttons"]}>
      <Button onClick={onRemoveHandler}>-</Button>
      <Button onClick={onOrderHandler}>ORDER</Button>
      <Button onClick={onAddHandler}>+</Button>
    </div>
  );
};

export default BottomButtons;
