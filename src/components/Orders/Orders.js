import classes from "./Orders.module.css";
import OrderItem from "./OrderItem";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import orderSliceActions from "../../store/order-slice";
// import { setOrders } from "../../store/order-slice";

const Orders = () => {
  // const [reInicialize, setReInicialize] = useState(false);
  const dispatch = useDispatch();
  const [localStorageOrders, setLocalStorageOrders] = useState([]);

  // console.log("ponovo");
  // dispatch(setOrders());
  // const ordersJSON = localStorage.getItem("orders");
  // const orders = JSON.parse(ordersJSON);
  // setLocalStorageOrders(orders);
  useEffect(() => {
    let orders = JSON.parse(localStorage.getItem("orders"));
    setLocalStorageOrders(orders);
  }, []);

  //   console.log(localStorageOrders);

  //   let orders = useSelector((state) => state.order.orders);
  //   const orders = localStorageOrders;
  //   orders.push(...localStorageOrders);
  //   const orders = [];
  //   console.log(orders);
  useEffect(() => {
    console.log("order");
  }, []);
  //   if (!orders) orders = [];

  const orders = [];

  return (
    <div className={classes["orders-container"]}>
      <nav>
        <h1> My Activity</h1>
      </nav>
      <div className={classes["orders"]}>
        <nav>
          <div>
            <div>ID</div>
            <div>Ordered Food</div>
          </div>
          <div>
            <div>Total Amount</div>
            <div>Total Price</div>
          </div>
        </nav>

        {localStorageOrders &&
          localStorageOrders.map((order) => (
            <OrderItem
              order={order}
              key={+String(new Date().getTime()).slice(-2) + Math.random()}
            />
          ))}
      </div>
    </div>
  );
};

export default Orders;
