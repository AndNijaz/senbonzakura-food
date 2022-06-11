import classes from "./ModalMenuItem.module.css";
import Button from "../UI/Button";
import useAddToCart from "../../Hooks/use-add-to-cart";
import useRemoveFromCart from "../../Hooks/use-remove-from-cart";

const ModalMenuItem = (props) => {
  const addToCart = useAddToCart();
  const removeFromCart = useRemoveFromCart();

  const foodObject = props.foodObj;
  const { foodName, foodDescription, foodPrice, foodAmount } = foodObject;

  const onAddHandler = () => {
    addToCart(foodObject);
  };

  const onRemoveHandler = () => {
    removeFromCart(foodObject);
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
