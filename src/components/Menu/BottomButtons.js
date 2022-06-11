import classes from "./BottomButtons.module.css";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import useOrder from "../../Hooks/use-order";
import useAddToCart from "../../Hooks/use-add-to-cart";
import useRemoveFromCart from "../../Hooks/use-remove-from-cart";
import useMessageModal from "../../Hooks/use-message-modal";

const BottomButtons = (props) => {
  const openMessageModal = useMessageModal();
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

    if (orderObject.totalAmount === 0) {
      openMessageModal({ type: "sad", message: "You can't order empty cart!" });

      return;
    }
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
