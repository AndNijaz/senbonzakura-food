import classes from "./CartModal.module.css";
import CartModalFoodList from "./CartModalFoodList";
import BigCart from "../../Assets/BigCart.svg";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import useOrder from "../../Hooks/use-order";

const CartModal = () => {
  const cart = useSelector((state) => state.cart.cart);
  const order = useOrder();
  const { totalPrice, totalAmount } = useSelector((state) => state.cart);

  const onOrderHandler = () => {
    const orderObject = {
      cart: cart,
      totalAmount: totalAmount,
      totalPrice: totalPrice,
    };
    order(orderObject);
  };

  return (
    <div className={classes["cart-modal"]}>
      <div className={classes["cart-modal__navbar"]}></div>
      <div className={classes["cart-modal__body"]}>
        <div className={classes["body__left-side"]}>
          <h1>ORDERS</h1>
          <CartModalFoodList />
        </div>
        <div className={classes["body__right-side"]}>
          <div>
            <img src={BigCart} />
          </div>
          <div>
            <h2>Total price:</h2>
            <h2>{totalPrice}$</h2>
          </div>
          <div>
            <h2>Total amount:</h2>
            <h2>{totalAmount}</h2>
          </div>
          <Button type="button" onClick={onOrderHandler}>
            Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
