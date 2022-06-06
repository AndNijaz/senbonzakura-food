// import { NavLink } from "react-router-dom";
import classes from "./ModalMenuItem.module.css";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import cartSliceActions from "../../store/cart-slice";

const ModalMenuItem = (props) => {
  const dispatch = useDispatch();

  const {
    foodName,
    foodDescription,
    foodPrice,
    id: foodID,
    foodAmount,
  } = props.foodObj;

  const onAddHandler = () => {
    dispatch(cartSliceActions.addToCart(props.foodObj));
  };

  const onRemoveHandler = () => {
    dispatch(cartSliceActions.removeFromCart(props.foodObj));
  };

  return (
    <div className={classes["menu-item"]}>
      <div>
        <h2>{foodName}</h2>
        <h2>{foodPrice}$</h2>
      </div>
      <div>
        <p>{foodDescription}</p>
        <div className={classes["menu-item__functions"]}>
          <div>x{foodAmount}</div>
          <Button onClick={onRemoveHandler}>-</Button>
          <Button onClick={onAddHandler}>+</Button>
        </div>
      </div>
    </div>
  );
};

export default ModalMenuItem;
