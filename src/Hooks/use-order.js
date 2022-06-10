import { useDispatch } from "react-redux";
import cartSliceActions from "../store/cart-slice";

const useOrder = () => {
  const dispatch = useDispatch();

  //   console.log(orderItem);

  const order = (orderItem) => {
    if (orderItem.totalAmount === 0) return;
    let orders = JSON.parse(localStorage.getItem("orders"));
    // const kara = localStorage.getItem("orders");
    // console.log(kara);
    // const dela = JSON.parse(kara);
    // console.log(dela);

    if (!orders) orders = [];

    orders.push(orderItem);
    // console.log(orders);

    localStorage.setItem("orders", JSON.stringify(orders));
    dispatch(cartSliceActions.cartOrdered());
  };
  return order;
};

export default useOrder;
