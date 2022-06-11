import classes from "./CartModal.module.css";
import CartModalFoodList from "./CartModalFoodList";
import BigCart from "../../Assets/BigCart.svg";
import { useSelector } from "react-redux";
import Button from "../UI/Button";
import useOrder from "../../Hooks/use-order";
import ModalNavbar from "./ModalNavbar";

import useCloseCart from "../../Hooks/use-close-cart";
import useMessageModal from "../../Hooks/use-message-modal";

const CartModal = () => {
  // const messageModal = useSelector((state) => state.ui.messageModal);
  const closeCart = useCloseCart();
  // const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const order = useOrder();
  const { totalPrice, totalAmount } = useSelector((state) => state.cart);
  const openMessageModal = useMessageModal();

  const onOrderHandler = () => {
    const orderObject = {
      cart: cart,
      totalAmount: totalAmount,
      totalPrice: totalPrice,
    };
    order(orderObject);
    if (orderObject.totalAmount === 0) {
      closeCart();
      openMessageModal({ type: "sad", message: "You can't order empty cart!" });

      return;
    }
    closeCart();
    openMessageModal({ type: "happy", message: "Successfully ordered" });
  };

  return (
    <div className={classes["cart-modal"]}>
      <ModalNavbar />
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
