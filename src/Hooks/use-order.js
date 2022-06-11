import { useDispatch } from "react-redux";
import cartSliceActions from "../store/cart-slice";
import uiSliceActions from "../store/ui-slice";

const useOrder = () => {
  const dispatch = useDispatch();

  const order = (orderItem) => {
    //Cancel side effect if button order is clicked but there is no item in cart
    if (orderItem.totalAmount === 0) return;

    let orders = JSON.parse(localStorage.getItem("orders"));

    if (!orders) orders = [];

    orders.push(orderItem);

    localStorage.setItem("orders", JSON.stringify(orders));
    dispatch(cartSliceActions.cartOrdered());

    dispatch(
      uiSliceActions.updateMessageModal({
        type: "happy",
        message: "Successfully ordered.",
      })
    );
  };
  return order;
};

export default useOrder;
