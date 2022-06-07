import classes from "./CartModalFoodList.module.css";
import ModalMenuItem from "./ModalMenuItem";
import { useSelector } from "react-redux";

const CartModalFoodList = () => {
  const cartState = useSelector((state) => state.cart);
  const { cart: foodList } = cartState;

  return (
    <div className={classes["menu-list"]}>
      {foodList.map((foodObj) => (
        <ModalMenuItem key={foodObj.id} foodObj={foodObj} />
      ))}
    </div>
  );
};

export default CartModalFoodList;
